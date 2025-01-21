import seedrandom from 'seedrandom';

export const itemPrefixes = [
	'Made of platinum ',
	'Fresh ',
	'State-of-the-art ',
	'Ancient ',
	'handmade ',
	'Clockwork ',
	'Legendary ',
	'Grilled ',
	'Raw ',
	'Made by Ai ',
	'Pocket-sized ',
	'3 days ago ',
	'Just around the corner ',
	'Fake ',
	'Used ',
	'Broken ',
	'Commercial ',
	'Made by Microsoft ',
	'Made by Apple ',
	'Made with the best technology in the world ',
	'Made in 2018 ', // TODO Random
	'Weighs about 500kg ',
	'Luxury ',
	'Rotten ',
	'Equipped with artificial intelligence ',
	'Anti-gravity ',
	'Foldable ',
	'Portable ',
	'Genetically modified ',
	'Gained the ability to fly ',
	'Made of pure gold ',
	'Transparent ',
	'Lights up ',
	'Heart-shaped ',
	'Moves ',
	'Cut in half ',
	'With a USB connector ',
	'Ancient ',
	'Cursed ',
	'Enchanted ',
	'A days worth of vitamins ',
	'Half-life ',
	'Phantom ',
	'Virtual ',
	'Nuclear ',
	'Highly trained ',
	'Non-GMO ',
	'Found in the deepest part of a dungeon ',
	'Otherworldly ',
	'alien ',
	'mysterious ',
	'distorts space-time ',
	'makes strange noises ',
	'disperses ',
	'turns into plasma ',
	'explodes on impact with low probability ',
	'mimics zucchini ',
	'hypothetical ',
	'poisonous ',
	'true ',
	'ultimate ',
	'contains chocolate ',
	'smelly ',
	'fourth dimension ',
	'pulsating ',
	'mysterious ',
	'square ',
	'rampage ',
	'dream ',
	'dark ',
	'black ',
	'sealed ',
	'dead ',
	'frozen ',
	'divine ',
	'forbidden ',
	'holographic ',
	'Hydraulic ',
	'Slightly spicy, not spicy but not hot ',
	'Burnt ',
	'Space ',
	'Electron ',
	'Positron ',
	'Quantum mechanical ',
	"Schrödinger's ",
	'Distributed ',
	'Egg on top ',
	'Next generation ',
	'Electrically charged ',
	'Ancient ',
	'WiFi compatible ',
	'High resilience ',
	'Latest Reiwa version ',
	'Low-cost version ',
	'Sticky ',
	'Muddy ',
	'Dry ',
	'Damp ',
	'Expired ',
	'From hell ',
	'Garlic-like ',
	'Radioactive ',
	'Fractal ',
	'Recursive ',
	'Sometimes splits ',
	'Disappears ',
	'Moves in a uniform straight line ',
	'X-ray irradiation ',
	'wriggling ',
	'metaphysical ',
	'soft ',
	'chilled ',
	'hot ',
	'huge ',
	'nano-sized ',
	'soft ',
	'buggy ',
	'artificial ',
	'natural ',
	'enshrined ',
	'chocolate-coated ',
	'antibacterial ',
	'fire-resistant ',
	'intense ',
	'fierce ',
	'super ',
	'growing in numbers ',
	'lightweight ',
	'national treasure ',
	'trendy ',
	'8-carat ',
	'second-hand ',
	'new ',
	'beloved wife ',
	'brand name ',
	'multiplying ',
	'jiggling ',
	'squishy ',
	'multi-purpose ',
	'Nice feeling™ ',
	'Hot ',
	'Advanced ',
	'Retro ',
	'Vintage ',
	'Legal ',
	'Premium ',
	'Large ',
	'Giga ',
	'Tarnished ',
	'Quality guaranteed ',
	'AppleCare+ included ',
	'Sexy ',
	'Designer ',
	'Alluring ',
	'Sparkling ',
	'Shiny ',
	'Sticky ',
	'Muscular ',
	'Overclocked ',
	'Inorganic ',
	'Avant-garde ',
	'Suspicious ',
	'Mysterious ',
	'Moldy ',
	'Aged ',
	'Die-cast aluminium ',
	'Farmed ',
	'Awesome ',
	'Amazing ',
	'Cute ',
	'Digital ',
	'Analog ',
	'Easy ',
	'Colorful ',
	'Electric ',
	'No collision detection ',
	'Sunk ',
	'Once in a century ',
	'Juicy ',
	'Hi-Res ',
	'Crazy ',
	'Edible ',
	'THE ',
	'Something ',
	'Rotting ',
	'Ruined ',
	'Coefficient of restitution e>1 ',
	'Coefficient of friction 0 ',
	'Unleashed ',
	'Big ',
	'Small ',
	'Greedy ',
	'Wavy ',
	'Submerged ',
	'Burning ',
	'High pressure ',
	'Abnormal ',
	'Coarsely ground ',
];

export const items = [
	'Eggplant ',
	'Tomato ',
	'Cucumber ',
	'Potato ',
	'Fried Rice Vermicelli ',
	'Loin ',
	'Sushi ',
	'Pumpkin ',
	'Yukichi ',
	'Kilobar ',
	'Aluminum ',
	'Sodium ',
	'Magnesium ',
	'Plutonium ',
	'Small Medal ',
	'Milk Carton ',
	'Plastic Bottle ',
	'Cookie ',
	'Chocolate ',
	'Maid Uniform ',
	'Orange ',
	'Knee Socks ',
	'Antimatter Capacitor ',
	'Particle Accelerator ',
	'Microprocessor (8 Cores 16 Threads) ',
	'Nuclear Power Plant ',
	'Layer 4 Switch ',
	'Buffer Chain ',
	'Positron Brain ',
	'Planet ',
	'Theremin ',
	'Worm Gear ',
	'Mounter ',
	'Bucket wheel excavator ',
	'Christcore ',
	'Game Boy Advance ',
	'Quantum computer ',
	'Anamorphic lens ',
	'Mysterious creature that came out of the closet ',
	'Smartphone ',
	'Clock ',
	'Pudding ',
	"Gabriel's Trumpet ",
	"Menger's sponge ",
	'Hand spinner ',
	'Hypercube ',
	'Building ',
	'Energy drink ',
	'Mouse cursor ',
	'Glasses ',
	'Tuna ',
	'Trash can ',
	'Toothpick ',
	'The green divider thing in a lunchbox ',
	'Disposable chopsticks ',
	'Ventilation fan ',
	'Plastic bottle cap ',
	'Wave breaker block ',
	'Pizza ',
	'Toothpaste ',
	'Empty can ',
	'Key chain ',
	'Blonde, blue-eyed beauty ',
	'SD card ',
	'Lip balm ',
	'Chocolate cornet without chocolate ',
	'Bird flu ',
	'Vending machine ',
	'Heavy object ',
	'Laptop ',
	'Beef jerky ',
	'String cheese ',
	'Diamond ',
	'Object ',
	'Moon rock ',
	'Singularity ',
	'Neutron star ',
	'Liquid ',
	'Satellite ',
	'Zucchini ',
	'Black object ',
	'White object ',
	'Red object ',
	'Round object ',
	'Square object ',
	'Card-shaped object ',
	'Gas ',
	'Pencil ',
	'Eraser ',
	'Sword ',
	'Rod-shaped object ',
	'Agricultural product ',
	'Metal slime ',
	'Octopus legs ',
	'Mushroom' ,
	'Nameko ',
	'Canned chuhai ',
	'Nail clippers ',
	'Earpick ',
	'Plush toy ',
	'Tyrannosaurus ',
	'Urinary stones ',
	'Enter key ',
	'Pot ',
	'Mercury ',
	'DHMO ',
	'Water ',
	'Land ',
	'Continent ',
	'Dice ',
	'Outdoor unit ',
	'Hydraulic jack ',
	'Tapioca ',
	'Toilet paper roll ',
 	'Cardboard box ',
 	'Haniwa ',
	'Ballpoint pen ',
	'Mechanical pencil ',
	'Atom ',
	'Space ',
	'Elementary particles ',
	'Sesame oil ',
	'Kraft Mac n Cheese ',
	'Dark matter ',
	'Black hole ',
	'Sun ',
	'Quartz glass ',
	'Dam ',
	'Virus ',
	'bacteria ',
	'concrete arch dam ',
	'concrete gravity dam ',
	'flush valve ',
	'vibraslap ',
	'object ',
	'nuclear power plant ',
	'nuclear reactor ',
	'sieve of Eratosthenes ',
	'cathode ray tube ',
	'tachyon ',
	"Russell's teapot ",
	'electronic device ',
	'TNT ',
	'polygon ',
	'air ',
	'RTX 3090 ',
	'mechanical pencil lead ',
	'Rosetta Stone ',
	'caps lock ',
	'nothingness ',
	'UFO ',
	'num lock ',
	'radioactive waste ',
	'Mars ',
	'uranium ',
	'centrifuge ',
	'undefined ',
	'null ',
	'NaN ',
	'[object Object] ',
	'Zero-width space ',
	'Full-width space ',
	'Drum ',
	'Stone statue ',
	'Slime ',
	'Point P ',
	'🤯 ',
	'Golden egg ',
	'Floppy disk ',
	'Scroll ',
	'JavaScript console ',
	'Internet Explorer ',
	'Submarine-launched ballistic missile ',
	'Mitochondria ',
	'Helium ',
	'Protein ',
	'Capsaicin ',
	'Escalator ',
	'Nuclear fusion reactor ',
	'Geothermal power plant ',
	'Apartment building ',
	'Lava light ',
	'Galileo thermometer ',
	'Radiometer ',
	'Sand picture ',
	'Storm glass ',
	"Newton's cradle ",
	'Perpetual motion machine ',
	'The peanut part of a persimmon seed ',
	'The cylindrical thing you put the receipt in ',
	'Futon ',
	'Bedding ',
	'Idol ',
	'All things in the universe ',
	'Stupa ',
	'Fundamental rights of citizens ',
	'Kotatsu ',
	'Socks (one missing) ',
	'Health insurance card ',
	'Telephone card ',
	'Black piano keys ',
	'AC adapter ',
	'DVD ',
	'City bus ',
	'Base station ',
	'404 Not Found ',
	'JSON ',
	'Tapestry ',
	'Book ',
	'Stone statue ',
	'Ancient document ',
	'Scroll ',
	'Misskey ',
	'Picked fruit ',
	'<any string here> ',
	'Fossil ',
	'Manhole cover ',
	'Manhole ',
	'Faucet ',
	'Bi ',
	'Coin ',
	'Bitcoin ',
	'1 yen coin ',
	'G-clef ',
	'Portal ',
	'National budget ',
	'The other half of a bracket that was forgotten to be closed ',
	'Electric massager ',
	'Pop-up ads ',
	'README.txt ',
	'Aaaaah ',
	'Commit ',
	'Prime numbers ',
	'Task manager ',
	'Miscellaneous ',
	'Carbohydrates ',
	'Decahedron ',
	"Klein's bottle ",
	'Möbius strip ',
	'Orichalcum ',
	'Sludge ',
	'Grating ',
	'The Cosmos ',
	'Super-Kamiokande ',
	'Desktop ',
];

export const and = [
	'mimicked ',
	'entered ',
	'looks like ',
	'pretending to be',
	'oppressed ',
	'made servant of ',
	'servant of God ',
	'ridden on ',
];

export function genItem(seedOrRng?: (() => number) | string | number) {
	const rng = seedOrRng
		? typeof seedOrRng === 'function'
			? seedOrRng
			: seedrandom(seedOrRng.toString())
		: Math.random;

	let item = '';
	if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
	item += items[Math.floor(rng() * items.length)];
	if (Math.floor(rng() * 10) === 0) {
		item += and[Math.floor(rng() * and.length)];
		if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
		item += items[Math.floor(rng() * items.length)];
	}
	return item;
}
