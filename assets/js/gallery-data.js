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
	
	{ file: "DSCF3453.jpg", alt: "grass", location: "Provins, France", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3422.jpg", alt: "provins", location: "Provins, France", year: "2026", size: "w-3 h-3" },
	{ file: "DSCF3308.jpg", alt: "museum", location: "Paris, France", year: "2026", size: "h-2" },
	{ file: "DSCF3741.jpg", alt: "Bike lane", location: "Zaandam, Netherlands", year: "2026", size: "w-2 h-2" },
	{ file: "IMG_0588.JPG", alt: "Málaga from the hill", location: "Málaga, Spain", year: "2026", size: "w-2 h-1" },
	{ file: "DSCF3723.jpg", alt: "Road", location: "Zaandam, Netherlands", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3738.jpg", alt: "Windmill", location: "Zaanse Schans, Netherlands", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3767.JPG", alt: "Málaga bullring from above", location: "Zaanse Schans, Netherlands", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0583.JPG", alt: "Seagull over Málaga", location: "Málaga, Spain", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3595.JPG", alt: "Metro", location: "Amsterdam, Netherlands", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0575.jpg", alt: "Motorbike", location: "Palma, Spain", year: "2026", size: "h-4" },
	{ file: "IMG_0590.JPG", alt: "Street cafe", location: "Palma, Spain", year: "2026", size: "w-1 h-2" },
	{ file: "DSCF4574.jpg", alt: "Veil at sunset", location: "Saint-Jean-de-Luz, France", year: "2026", size: "w-1 h-3" },
	{ file: "IMG_0577.JPG", alt: "Seafront walls and park", location: "Palma, Spain", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3662.jpg", alt: "Biking", location: "Zaandam, Netherlands", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3357.jpg", alt: "parisparc", location: "Paris, France", year: "2026", size: "w-5 h-1" },
	{ file: "DSCF3227.jpg", alt: "parisbuilding", location: "Paris, France", year: "2026", size: "w-1 h-1" },

	{ file: "DSCF3811.jpg", alt: "grass", location: "Interlaken, Switzerland", year: "2026", size: "w-3 h-2" },
	{ file: "IMG_0586.JPG", alt: "Málaga bullring from above", location: "Málaga, Spain", year: "2026", size: "w-3 h-3" },
	{ file: "IMG_0584.jpg", alt: "Arched courtyard", location: "Málaga, Spain", year: "2026", size: "h-2" },
	{ file: "DSCF3392.jpg", alt: "garage", location: "Provins, France", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3423.jpg", alt: "carousel", location: "Provins, France", year: "2026", size: "w-2 h-1" },
	{ file: "DSCF3322.jpg", alt: "parvis", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3572.jpg", alt: "car", location: "Provins, France", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3545.jpg", alt: "rempart", location: "Provins, France", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3332.jpg", alt: "wall", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "IMG_0567.jpg", alt: "building", location: "Palma, Spain", year: "2026", size: "w-3 h-2" },
	{ file: "DSCF3323.jpg", alt: "dove", location: "Paris, France", year: "2026", size: "h-4" },
	{ file: "DSCF3543.jpg", alt: "rempartman", location: "Provins, France", year: "2026", size: "w-1 h-2" },
	{ file: "DSCF3327.jpg", alt: "librarie", location: "Paris, France", year: "2026", size: "w-1 h-3" },
	{ file: "DSCF3462.jpg", alt: "couch", location: "Provins, France", year: "2026", size: "w-2 h-3" },
	{ file: "DSCF3487.jpg", alt: "hotel", location: "Provins, France", year: "2026", size: "w-2 h-2" },
	{ file: "DSCF3530.jpg", alt: "provinsparc", location: "Provins, France", year: "2026", size: "w-5 h-1" },
	{ file: "IMG_0571.JPG", alt: "Metro platform", location: "Málaga, Spain", year: "2026", size: "w-1 h-1" },

	{ file: "germany1.jpg", alt: "germany1", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "ladefense1.jpg", alt: "ladefense1", location: "La Défense, France", year: "2023", size: "w-3 h-3" },
	{ file: "lille2.jpg", alt: "lille2", location: "Lille, France", year: "2023", size: "h-2" },
	{ file: "louvre1.jpg", alt: "louvre1", location: "Paris, France", year: "2023", size: "w-2 h-2" },
	{ file: "rouen.JPG", alt: "rouen", location: "Rouen, France", year: "2023", size: "w-2 h-1" },
	{ file: "ladefense2.jpg", alt: "ladefense2", location: "La Défense, France", year: "2023", size: "w-1 h-3" },
	{ file: "lemans.JPG", alt: "lemans", location: "Le Mans, France", year: "2024", size: "w-2 h-3" },
	{ file: "germany2.jpg", alt: "germany2", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "lille1.jpg", alt: "lille1", location: "Lille, France", year: "2023", size: "w-1 h-3" },
	{ file: "germany3.jpg", alt: "germany3", location: "Köln, Germany", year: "2023", size: "w-3 h-2" },
	{ file: "lille3.jpg", alt: "lille3", location: "Lille, France", year: "2023", size: "h-4" },
	{ file: "louvre2.jpg", alt: "louvre2", location: "Paris, France", year: "2023", size: "w-1 h-2" },
	{ file: "lille4.jpg", alt: "lille4", location: "Lille, France", year: "2023", size: "w-1 h-3" },
	{ file: "germany5.jpg", alt: "germany5", location: "Köln, Germany", year: "2023", size: "w-2 h-3" },
	{ file: "louvre3.jpg", alt: "louvre3", location: "Paris, France", year: "2023", size: "w-2 h-2" },
	{ file: "DSCF3979.JPG", alt: "Boy and cat by the water", location: "Interlaken, Switzerland", year: "2026", size: "w-5 h-1" },
	{ file: "germany4.jpg", alt: "germany4", location: "Köln, Germany", year: "2023", size: "w-1 h-1" },

	{ file: "phanthiet.jpg", alt: "phanthiet", location: "Phan Thiết, Vietnam", year: "2020", size: "w-3 h-2" },
	{ file: "langbiang.jpg", alt: "langbiang", location: "Đà Lạt, Vietnam", year: "2019", size: "w-3 h-3" },
	{ file: "dog.JPG", alt: "dog", location: "Đà Lạt, Vietnam", year: "2021", size: "h-2" },
	{ file: "graduation.jpg", alt: "graduation", location: "HCM City, Vietnam", year: "2019", size: "w-2 h-2" },
	{ file: "lhp.jpg", alt: "lhp", location: "HCM City, Vietnam", year: "2015", size: "w-2 h-1" },
	{ file: "panning.jpg", alt: "panning", location: "HCM City, Vietnam", year: "2018", size: "w-1 h-3" },
	{ file: "baa.jpg", alt: "baa", location: "Phan Thiết, Vietnam", year: "2020", size: "w-2 h-3" },
	{ file: "pnt.jpg", alt: "pnt", location: "HCM City, Vietnam", year: "2020", size: "w-3 h-2" },
	{ file: "DSCF3550.jpg", alt: "ntdl", location: "Gia Lai, Vietnam", year: "2020", size: "w-1 h-3" },
	{ file: "grad.jpg", alt: "grad", location: "HCM City, Vietnam", year: "2019", size: "w-3 h-2" },
	{ file: "tuktuk.jpg", alt: "tuktuk", location: "Bangkok, Thailand", year: "2018", size: "h-4" },
	{ file: "tuyenbk.jpg", alt: "tuyenbk", location: "HCM City, Vietnam", year: "2019", size: "w-1 h-2" },
	{ file: "ntsp.JPG", alt: "ntsp", location: "HCM City, Vietnam", year: "2019", size: "w-1 h-3" },
	{ file: "vug.JPG", alt: "vug", location: "HCM City, Vietnam", year: "2016", size: "w-2 h-3" },
	{ file: "DSCF2819.jpg", alt: "venice", location: "Venice, Italy", year: "2024", size: "w-2 h-2" },
	{ file: "tunnel.jpg", alt: "tunnel", location: "Ninh Bình, Vietnam", year: "2018", size: "w-5 h-1" },
	{ file: "dragonfly.jpg", alt: "dragonfly", location: "Cần Giờ, Vietnam", year: "2018", size: "w-1 h-1" },
];
