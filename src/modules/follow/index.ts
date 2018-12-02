import 藍 from '../../ai';
import IModule from '../../module';
import MessageLike from '../../message-like';
import serifs from '../../serifs';

export default class FollowModule implements IModule {
	public readonly name = 'follow';
	private ai: 藍;

	public install = (ai: 藍) => { 
		this.ai = ai;
	}

	public onMention = (msg: MessageLike) => {
		if (msg.text && msg.text.includes('フォロー')) {
				if (msg.friend.doc.user.isFollowing) {
					msg.reply(serifs.follow.alreadyFollowed);
				} else if (msg.friend.love < -5) {
					msg.reply(serifs.follow.ng);
				} else if (msg.friend.love <= 3) {
					msg.reply(serifs.follow.requireMoreLove);
				} else {
					this.ai.api("following/create", {
						userId: msg.userId,
					});
					msg.reply(serifs.follow.ok);
				}
			return true;
		} else {
			return false;
		}
	}
}
