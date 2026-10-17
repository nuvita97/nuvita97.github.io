// Gallery photos, shown on the page in this order (top to bottom).
//
// To add a photo: put the image in images/ and add a line below.
// To edit a caption: change its location or year.
// Leave location or year as "" to hide that part of the caption.
//
// size sets the tile shape on the 6-column grid:
//   w-1 ... w-6  width in columns
//   h-1 ... h-6  height in rows (rows alternate short 100px and tall 300px)
// Tiles fill gaps automatically, so aim for each group to add up to 6 columns.

const GALLERY_PHOTOS = [
	
	{ file: "DSCF3453.jpg", alt: "Green field under a blue sky", location: "Provins, France", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3422.jpg", alt: "Old stone house on a street corner", location: "Provins, France", year: "2026", size: "w-3 h-3" },
	{ file: "DSCF3308.jpg", alt: "People climbing a sunlit staircase", location: "Paris, France", year: "2026", size: "h-2" },
	{ file: "DSCF3741.jpg", alt: "Bike lane sign by a curving path", location: "Zaandam, Netherlands", year: "2026", size: "w-2 h-2" },
	{ file: "IMG_0588.JPG", alt: "People overlooking the city from a hilltop", location: "Málaga, Spain", year: "2026", size: "w-2 h-1" },
	{ file: "DSCF3723.jpg", alt: "Road leading to a green building", location: "Zaandam, Netherlands", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3738.jpg", alt: "Windmill against a blue sky", location: "Zaanse Schans, Netherlands", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3767.jpg", alt: "Reeds along the water", location: "Zaanse Schans, Netherlands", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0583.JPG", alt: "Seagull above the city and sea", location: "Málaga, Spain", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3595.jpg", alt: "Empty metro platform", location: "Amsterdam, Netherlands", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0575.JPG", alt: "Motorbike on a palm-lined avenue", location: "Palma, Spain", year: "2026", size: "h-4" },
	{ file: "IMG_0590.JPG", alt: "Cathedral tower above a narrow street", location: "Palma, Spain", year: "2026", size: "w-1 h-2" },
	{ file: "DSCF4574.jpg", alt: "Bridal veil at sunset", location: "Saint-Jean-de-Luz, France", year: "2026", size: "w-1 h-3" },
	{ file: "IMG_0577.JPG", alt: "Old fortress walls by the seafront", location: "Palma, Spain", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3662.jpg", alt: "Cyclist on a rainbow crossing", location: "Zaandam, Netherlands", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3357.jpg", alt: "Crowd relaxing on a park lawn", location: "Paris, France", year: "2026", size: "w-5 h-1" },
	{ file: "DSCF3227.jpg", alt: "Corner apartment building", location: "Paris, France", year: "2026", size: "w-1 h-1" },

	{ file: "DSCF3811.JPG", alt: "Turquoise lake below the mountains", location: "Interlaken, Switzerland", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0586.JPG", alt: "Bullring among city towers", location: "Málaga, Spain", year: "2026", size: "w-3 h-3" },
	{ file: "IMG_0584.JPG", alt: "Arched courtyard with a balcony", location: "Málaga, Spain", year: "2026", size: "h-2" },
	{ file: "DSCF3392.jpg", alt: "Timber house next to a garage", location: "Provins, France", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3423.jpg", alt: "Carousel by an old stone building", location: "Provins, France", year: "2026", size: "w-2 h-1" },
	{ file: "DSCF3322.jpg", alt: "Bookshop on a street corner", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3572.jpg", alt: "Yellow Mini parked by a hotel", location: "Provins, France", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3545.jpg", alt: "Medieval ramparts and a dirt path", location: "Provins, France", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3332.jpg", alt: "Mona Lisa street art on a stone wall", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "IMG_0567.JPG", alt: "Car speeding past a gas station", location: "Palma, Spain", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3323.jpg", alt: "Man on a bench with pigeons", location: "Paris, France", year: "2026", size: "h-4" },
	{ file: "DSCF3543.jpg", alt: "Walking along the medieval ramparts", location: "Provins, France", year: "2026", size: "w-1 h-2" },
	{ file: "DSCF3327.jpg", alt: "Woman entering an old bookshop", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3462.jpg", alt: "Bench under a tree by a field", location: "Provins, France", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3487.jpg", alt: "Town hall facade", location: "Provins, France", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3530.jpg", alt: "People relaxing in a park", location: "Provins, France", year: "2026", size: "w-5 h-1" },
	{ file: "IMG_0571.JPG", alt: "Street cafe under a shop sign", location: "Málaga, Spain", year: "2026", size: "w-1 h-1" },

	{ file: "germany1.jpg", alt: "Person crossing a quiet plaza", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "ladefense1.jpg", alt: "La Défense skyline", location: "La Défense, France", year: "2023", size: "w-3 h-3" },
	{ file: "lille2.jpg", alt: "Statue silhouetted at dusk", location: "Lille, France", year: "2023", size: "h-2" },
	{ file: "louvre1.jpg", alt: "Marble statues in a museum hall", location: "Paris, France", year: "2023", size: "w-2 h-2" },
	{ file: "rouen.JPG", alt: "Half-timbered building", location: "Rouen, France", year: "2023", size: "w-2 h-1" },
	{ file: "ladefense2.jpg", alt: "Man sitting on steps by a white wall", location: "La Défense, France", year: "2023", size: "w-1 h-3" },
	{ file: "lemans.JPG", alt: "City street seen through a window", location: "Le Mans, France", year: "2024", size: "w-2 h-3" },
	{ file: "germany2.jpg", alt: "Main train station", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "lille1.jpg", alt: "Man waiting at a bus stop", location: "Lille, France", year: "2023", size: "w-1 h-3" },
	{ file: "germany3.jpg", alt: "River cruise boat by the old town", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "lille3.jpg", alt: "Mural on a tall building", location: "Lille, France", year: "2023", size: "h-4" },
	{ file: "louvre2.jpg", alt: "Bust silhouetted by a window", location: "Paris, France", year: "2023", size: "w-1 h-2" },
	{ file: "lille4.jpg", alt: "Arched window in a vaulted hall", location: "Lille, France", year: "2023", size: "w-1 h-3" },
	{ file: "germany5.jpg", alt: "Cars leaving a tunnel", location: "Köln, Germany", year: "2023", size: "w-2 h-3" },
	{ file: "louvre3.jpg", alt: "Visitor viewing a portrait painting", location: "Paris, France", year: "2023", size: "w-2 h-2" },
	{ file: "DSCF3979.JPG", alt: "Boy and cat by the lake", location: "Interlaken, Switzerland", year: "2026", size: "w-5 h-1" },
	{ file: "germany4.jpg", alt: "Kommerz Hotel sign", location: "Köln, Germany", year: "2023", size: "w-1 h-1" },

	{ file: "phanthiet.jpg", alt: "Basket boats in the bay", location: "Phan Thiết, Vietnam", year: "2020", size: "w-3 h-2" },
	{ file: "langbiang.jpg", alt: "Lone pine tree on a hilltop", location: "Đà Lạt, Vietnam", year: "2019", size: "w-3 h-3" },
	{ file: "dog.JPG", alt: "Puppy behind bars", location: "Đà Lạt, Vietnam", year: "2021", size: "h-2" },
	{ file: "graduation.jpg", alt: "Graduation day with friends", location: "HCM City, Vietnam", year: "2019", size: "w-2 h-2" },
	{ file: "lhp.jpg", alt: "Class photo in a school courtyard", location: "HCM City, Vietnam", year: "2015", size: "w-2 h-1" },
	{ file: "panning.jpg", alt: "Motorbike in a panning blur", location: "HCM City, Vietnam", year: "2018", size: "w-1 h-3" },
	{ file: "baa.jpg", alt: "Group photo on the beach", location: "Phan Thiết, Vietnam", year: "2020", size: "w-2 h-3" },
	{ file: "pnt.jpg", alt: "Friends posing by a gate", location: "HCM City, Vietnam", year: "2020", size: "w-3 h-2" },
	{ file: "DSCF3550.jpg", alt: "Woman in a pine forest", location: "Gia Lai, Vietnam", year: "2020", size: "w-1 h-3" },
	{ file: "grad.jpg", alt: "Mid-air jump on campus", location: "HCM City, Vietnam", year: "2019", size: "w-3 h-2" },
	{ file: "tuktuk.jpg", alt: "Tuk-tuk on a neon-lit street", location: "Bangkok, Thailand", year: "2018", size: "h-4" },
	{ file: "tuyenbk.jpg", alt: "Couple in a suit and áo dài", location: "HCM City, Vietnam", year: "2019", size: "w-1 h-2" },
	{ file: "ntsp.JPG", alt: "Woman reaching for pink flowers", location: "HCM City, Vietnam", year: "2019", size: "w-1 h-3" },
	{ file: "vug.JPG", alt: "Group photo with a banner", location: "HCM City, Vietnam", year: "2016", size: "w-2 h-3" },
	{ file: "DSCF2819.jpg", alt: "Two travelers in a narrow street", location: "Venice, Italy", year: "2024", size: "w-2 h-2" },
	{ file: "tunnel.jpg", alt: "Silhouettes at the end of a tunnel", location: "Ninh Bình, Vietnam", year: "2018", size: "w-5 h-1" },
	{ file: "dragonfly.jpg", alt: "Dragonfly perched on a twig", location: "Cần Giờ, Vietnam", year: "2018", size: "w-1 h-1" },
];
