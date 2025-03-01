import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import config from '@/config.js';
import got from 'got';

export default class extends Module {
	public readonly name = 'vocaloid';

	// 直前に投稿した動画のURLを保持
	private lastVideoUrl: string | null = null;

	@bindThis
	public install() {
		// YouTube の取得設定が無効ならモジュールを起動しない
		if (!config.vocaloidYoutubeEnabled) {
			this.log("vocaloidYoutubeEnabled is disabled. Skipping vocaloid module startup.");
			return {};
		}
		this.scheduleRecommend();
		return {};
	}

	@bindThis
	private async scheduleRecommend() {
		// 6～24時間の間隔（ミリ秒）をランダムに決定
		const minDelay = 6 * 60 * 60 * 1000;
		const maxDelay = 24 * 60 * 60 * 1000;
		const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
		setTimeout(async () => {
			await this.randomRecommend();
			this.scheduleRecommend();
		}, delay);
	}

	@bindThis
	private async randomRecommend() {
		// YouTube から取得する設定が有効なら YouTube 経由で動画を取得
		if (config.vocaloidYoutubeEnabled) {
			const video = await this.fetchYouTubeVideo();
			if (video) {
				// 重複投稿を防止
				if (this.lastVideoUrl === video.videoUrl) {
					this.log("Duplicate recommendation detected. Skipping duplicate post.");
					return;
				}
				this.lastVideoUrl = video.videoUrl;
				// 投稿メッセージに YouTube Music と記載
				const message = `おすすめのボカロ曲 (YouTube Music): 「${video.title}」\n視聴はこちら: ${video.videoUrl}`;
				this.ai.api('notes/create', { text: message });
				return;
			}
		}
	}

	@bindThis
	private async fetchYouTubeVideo(): Promise<{ title: string; videoUrl: string } | null> {
		if (!config.youtubeApiKey) {
			this.log("YouTube API Key is not set.");
			return null;
			}
		// "vocaloid" で検索し、videoCategoryId=10 を指定して YouTube Music 用にフィルター
		const query = 'vocaloid';
		const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=20&q=${encodeURIComponent(query)}&key=${config.youtubeApiKey}`;
		try {
			const res: any = await got(url, { responseType: 'json' }).json();
			if (res.items && res.items.length > 0) {
				// 重複URLのみを除外（「解説」を除外する条件を削除）
				let validItems = res.items.filter((item: any) => {
					const videoUrl = `https://www.youtube.com/watch?v=${item.id.videoId}`;
					return videoUrl !== this.lastVideoUrl;
				});
				if (validItems.length === 0) validItems = res.items;
				for (let i = validItems.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[validItems[i], validItems[j]] = [validItems[j], validItems[i]];
				}
				const selectedItem = validItems[0];
				return {
					title: selectedItem.snippet.title,
					videoUrl: `https://www.youtube.com/watch?v=${selectedItem.id.videoId}`
				};
			}
		} catch (err: unknown) {
			this.log("An error occurred while fetching YouTube video.");
		}
		return null;
	}
}
