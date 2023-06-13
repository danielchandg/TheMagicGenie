import bear from './images/bear.svg';
import bird from './images/bird.svg';
import boy from './images/boy.svg';
import car from './images/car.svg';
import deer from './images/deer.svg';
import dog from './images/dog.svg';
import elephant from './images/elephant.svg';
import fish from './images/fish.svg';
import genie from './images/genie.svg';
import girl from './images/girl.svg';
import lion from './images/lion.svg';
import mirror from './images/mirror.svg';
import monster from './images/monster.svg';
import mouse from './images/mouse.svg';
import prince from './images/prince.svg';
import princess from './images/princess.svg';
import robot from './images/robot.svg';
import snowman from './images/snowman.svg';
import baby from './images/baby.svg';

export const DisneyCharacters = {
  'Mickey Mouse': ['animal', 'has_sidekick', 'sing', 'love', 'phrase', 'main', 'classic', 'accent', 'red'],
  'Donald Duck': ['animal', 'is_sidekick', 'love', 'phrase', 'classic', 'accent', 'hairless'],
  'Goofy': ['animal', 'is_sidekick', 'phrase', 'classic', 'accent'],
  'Pluto': ['animal', 'is_sidekick', 'classic'],
  'Magic Mirror (from Snow White)': ['phrase', 'classic', 'object', 'magic', 'once', 'hairless', 'eyes'],
  'Cinderella': ['princess', 'has_sidekick', 'sing', 'love', 'phrase', 'main', 'classic', 'stepmother', 'royal', 'hair', 'mentor', 'tragic', 'blue', 'human', 'female'],
  'Snow White': ['princess', 'has_sidekick', 'love', 'main', 'classic', 'once', 'stepmother', 'royal', 'hair', 'season', 'mentor', 'human', 'female'],
  'Sleeping Beauty (Aurora)': ['princess', 'sing', 'love', 'main', 'classic', 'royal', 'mentor', 'human', 'female'],
  'Belle': ['princess', 'has_sidekick', 'sing', 'love', 'main', 'classic', 'royal', 'tragic', 'human', 'female'],
  'Ariel': ['princess', 'magic', 'has_sidekick', 'sing', 'love', 'mythical', 'main', 'classic', 'stepmother', 'royal', 'hair', 'water', 'red', 'human', 'female'],
  'Jasmine': ['princess', 'sing', 'love', 'classic', 'royal', 'hair', 'human', 'female', 'recent'],
  'Pocahontas': ['princess', 'magic', 'has_sidekick', 'sing', 'love', 'main', 'classic', 'history', 'season', 'mentor', 'tragic', 'human', 'female'],
  'Hades (from Hercules)': ['sing', 'magic', 'mythical', 'bad', 'classic', 'once', 'hair', 'mentor', 'strong', 'accent', 'human'],
  'Mulan': ['princess', 'has_sidekick', 'sing', 'love', 'main', 'classic', 'mentor', 'strong', 'tragic', 'human', 'female'],
  'Rapunzel': ['princess', 'magic', 'has_sidekick', 'sing', 'love', 'main', 'once', 'stepmother', 'hair', 'tragic', 'human', 'female', 'child'],
  'Elsa and Anna': ['princess', 'magic', 'has_sidekick', 'sing', 'love', 'phrase', 'main', 'royal', 'hair', 'season', 'tragic', 'blue', 'human', 'female', 'child', 'recent'],
  'Moana': ['princess', 'magic', 'has_sidekick', 'sing', 'main', 'once', 'water', 'mentor', 'human', 'female', 'child'],
  'Tiana (The Princess and the Frog)': ['princess', 'has_sidekick', 'sing', 'love', 'main', 'once', 'royal', 'mentor', 'human', 'female', 'green'],
  'Prince Charming': ['prince', 'sing', 'love', 'classic', 'royal', 'human'],
  'Simba': ['animal', 'has_sidekick', 'sing', 'phrase', 'main', 'classic', 'stepmother', 'royal', 'hair', 'mentor', 'tragic', 'child', 'recent'],
  'Mufasa': ['animal', 'has_sidekick', 'phrase', 'classic', 'royal', 'hair', 'season', 'recent'],
  'Scar': ['animal', 'has_sidekick', 'sing', 'phrase', 'bad', 'classic', 'stepmother', 'hair', 'accent', 'recent'],
  'Aladdin': ['prince', 'has_sidekick', 'sing', 'love', 'phrase', 'main', 'classic', 'royal', 'mentor', 'human', 'recent'],
  'Genie (from Aladdin)': ['magic', 'is_sidekick', 'sing', 'mythical', 'phrase', 'classic', 'blue', 'human', 'recent'],
  'Peter Pan': ['magic', 'has_sidekick', 'sing', 'main', 'classic', 'love', 'human', 'child', 'green'],
  'Wendy (from Peter Pan)': ['magic', 'main', 'sing', 'classic', 'love', 'mentor', 'human', 'female', 'child'],
  'Tinker Bell': ['magic', 'is_sidekick', 'mythical', 'phrase', 'classic', 'human', 'female', 'green'],
  'Winnie the Pooh': ['animal', 'has_sidekick', 'sing', 'phrase', 'main', 'classic', 'accent'],
  'Tigger': ['animal', 'is_sidekick', 'sing', 'classic', 'strong', 'red'],
  'Eeyore': ['animal', 'is_sidekick', 'sing', 'classic', 'mentor'],
  'Alice (from Alice in Wonderland)': ['has_sidekick', 'sing', 'main', 'classic', 'blue', 'human', 'female', 'child'],
  'Dumbo': ['magic', 'animal', 'has_sidekick', 'main', 'classic', 'recent'],
  'Bambi': ['animal', 'main', 'classic', 'tragic'],
  'Pinocchio': ['magic', 'sing', 'main', 'classic', 'object', 'mentor', 'human', 'child'],
  'Hercules': ['magic', 'has_sidekick', 'sing', 'love', 'mythical', 'main', 'classic', 'hair', 'mentor', 'strong', 'human'],
  'Tarzan': ['has_sidekick', 'sing', 'love', 'main', 'classic', 'hair', 'mentor', 'strong', 'tragic', 'phrase', 'human', 'child'],
  'Buzz Lightyear': ['is_sidekick', 'sing', 'phrase', 'object', 'mentor', 'human', 'green', 'recent'],
  'Woody (from Toy Story)': ['has_sidekick', 'sing', 'phrase', 'main', 'object', 'hair', 'human', 'recent'],
  'Sulley (from Monsters, Inc.)': ['has_sidekick', 'main', 'strong', 'blue', 'monster'],
  'Mike Wazowski': ['is_sidekick', 'eyes', 'green', 'monster'],
  'Boo (from Monsters, Inc.)': ['human', 'female', 'child'],
  'Randall Boggs (from Monsters, Inc.)': ['bad', 'accent', 'monster'],
  'Nemo': ['animal', 'has_sidekick', 'main', 'water', 'mentor', 'tragic', 'hairless'],
  'Dory': ['animal', 'is_sidekick', 'sing', 'phrase', 'water', 'tragic', 'accent', 'blue', 'hairless', 'female'],
  'Marlin': ['animal', 'has_sidekick', 'main', 'water', 'hairless'],
  'Lightning McQueen': ['has_sidekick', 'main', 'object', 'mentor', 'red', 'hairless'],
  'Olaf': ['magic', 'is_sidekick', 'sing', 'phrase', 'object', 'season', 'accent', 'hairless', 'recent'],
  'Kristoff (from Frozen)': ['sing', 'love', 'human', 'child', 'recent'],
  'Hans (from Frozen)': ['prince', 'sing', 'bad', 'once', 'royal', 'human', 'recent'],
  'Maui (from Moana)': ['magic', 'sing', 'mythical', 'once', 'water', 'strong', 'accent', 'human'],
  'Jane (from Tarzan)': ['love', 'classic', 'human', 'female'],
  'Megara (from Hercules)': ['sing', 'love', 'classic', 'hair', 'human', 'female'],
  'Mushu (from Mulan)': ['magic', 'is_sidekick', 'sing', 'mythical', 'classic', 'red', 'hairless'],
  'Maleficent (from Sleeping Beauty)': ['magic', 'has_sidekick', 'sing', 'phrase', 'bad', 'classic', 'human', 'female'],
  'Captain Hook (from Peter Pan)': ['has_sidekick', 'bad', 'classic', 'strong', 'red', 'human'],
  'Ursula (from The Little Mermaid)': ['magic', 'sing', 'bad', 'classic', 'hair', 'water', 'strong', 'human', 'female'],
  'King Triton (from The Little Mermaid)': ['magic', 'mythical', 'classic', 'stepmother', 'royal', 'hair', 'water', 'strong', 'human'],
  'Beast (from Beauty and the Beast)': ['prince', 'animal', 'phrase', 'classic', 'royal', 'hair', 'strong', 'monster'],
  'Evil Queen (from Snow White)': ['magic', 'sing', 'bad', 'classic', 'royal', 'human', 'female'],
  'Flynn Rider (from Tangled)': ['has_sidekick', 'sing', 'love', 'once', 'human'],
  'Maximus (from Tangled)': ['is_sidekick', 'animal', 'once'],
  'Merida (from Brave)': ['princess', 'has_sidekick', 'sing', 'phrase', 'main', 'once', 'royal', 'hair', 'mentor', 'accent', 'red', 'human', 'female', 'child'],
  'WALL-E': ['has_sidekick', 'phrase', 'main', 'object', 'once', 'accent', 'hairless'],
  'EVE': ['is_sidekick', 'object', 'once', 'accent', 'hairless'],
  'Remy': ['animal', 'has_sidekick', 'main', 'once'],
  'Mr. Incredible': ['magic', 'love', 'main', 'hair', 'strong', 'human', 'recent'],
  'Elastigirl (from The Incredibles)': ['magic', 'love', 'human', 'female', 'recent'],
  'Syndrome (from The Incredibles)': ['phrase', 'bad', 'once', 'hair', 'strong', 'human', 'recent'],
  'Jack Sparrow (from Pirates of the Caribbean)': ['has_sidekick', 'phrase', 'main', 'hair', 'mentor', 'accent', 'human'],
  'John Smith': ['love', 'classic', 'history', 'human'],
  "Kuzco (from The Emperor's New Groove)": ['has_sidekick', 'sing', 'main', 'once', 'royal', 'mentor', 'human', 'child'],
  "Kronk (from The Emperor's New Groove)": ['is_sidekick', 'sing', 'phrase', 'bad', 'once', 'accent', 'human'],
  'Lilo': ['has_sidekick', 'sing', 'phrase', 'main', 'mentor', 'human', 'female', 'child'],
  'Stitch': ['is_sidekick', 'sing', 'mythical', 'phrase', 'blue'],
  'Jumba and Pleakley (from Lilo & Stitch)': ['is_sidekick', 'mythical', 'eyes', 'monster'],
  'Li Shang (from Mulan)': ['prince', 'sing', 'love', 'classic', 'red', 'human'],
  'Fairy Godmother (from Cinderella)': ['magic', 'sing', 'mythical', 'classic', 'human', 'female'],
  'Baloo (from The Jungle Book)': ['animal', 'is_sidekick', 'sing', 'classic', 'accent', 'blue'],
  'Bagheera (from The Jungle Book)': ['animal', 'is_sidekick', 'classic'],
  'Mowgli (from The Jungle Book)': ['has_sidekick', 'main', 'classic', 'mentor', 'tragic', 'human', 'child'],
  'Robin Hood': ['has_sidekick', 'sing', 'main', 'classic', 'history', 'once', 'animal', 'mentor', 'green'],
  'Pumbaa and Timon (from The Lion King)': ['animal', 'is_sidekick', 'sing', 'phrase', 'classic', 'accent', 'recent'],
  'Zazu (from The Lion King)': ['animal', 'is_sidekick', 'sing', 'classic', 'recent'],
  'Jafar (from Aladdin)': ['has_sidekick', 'sing', 'bad', 'classic', 'royal', 'hair', 'strong', 'red', 'human', 'recent'],
  'Judy Hopps': ['has_sidekick', 'sing', 'animal', 'main', 'mentor', 'once', 'female'],
  'Miguel (from Coco)': ['has_sidekick', 'sing', 'main', 'once', 'mentor', 'human', 'child'],
  'Ralph (from Wreck-it Ralph)': ['main', 'phrase', 'hair', 'strong', 'red', 'human', 'recent'],
  'Vanellope von Schweetz (from Wreck-it Ralph)': ['mentor', 'human', 'female', 'child', 'recent'],
  'Joy (from Inside Out)': ['has_sidekick', 'sing', 'mythical', 'main', 'once', 'human', 'female'],
  'Sadness (from Inside Out)': ['is_sidekick', 'mythical', 'once', 'blue', 'female'],
  'Baymax': ['is_sidekick', 'object', 'once', 'phrase', 'strong', 'accent', 'hairless'],
}

export const DisneyIcons = {
  'Mickey Mouse': mouse,
  'Donald Duck': bird,
  'Goofy': dog,
  'Pluto': dog,
  'Magic Mirror (from Snow White)': mirror,
  'Cinderella': princess,
  'Snow White': princess,
  'Sleeping Beauty (Aurora)': princess,
  'Belle': princess,
  'Ariel': princess,
  'Jasmine': princess,
  'Pocahontas': girl,
  'Hades (from Hercules)': boy,
  'Mulan': girl,
  'Rapunzel': princess,
  'Elsa and Anna': princess,
  'Moana': girl,
  'Tiana (The Princess and the Frog)': princess,
  'Prince Charming': prince,
  'Simba': lion,
  'Mufasa': lion,
  'Scar': lion,
  'Aladdin': prince,
  'Genie (from Aladdin)': genie,
  'Peter Pan': boy,
  'Wendy (from Peter Pan)': girl,
  'Tinker Bell': girl,
  'Winnie the Pooh': bear,
  'Tigger': dog,
  'Eeyore': dog,
  'Alice (from Alice in Wonderland)': girl,
  'Dumbo': elephant,
  'Bambi': deer,
  'Pinocchio': boy,
  'Hercules': boy,
  'Tarzan': boy,
  'Buzz Lightyear': boy,
  'Woody (from Toy Story)': boy,
  'Sulley (from Monsters, Inc.)': monster,
  'Mike Wazowski': monster,
  'Boo (from Monsters, Inc.)': girl,
  'Randall Boggs (from Monsters, Inc.)': monster,
  'Nemo': fish,
  'Dory': fish,
  'Marlin': fish,
  'Lightning McQueen': car,
  'Olaf': snowman,
  'Kristoff (from Frozen)': boy,
  'Hans (from Frozen)': boy,
  'Maui (from Moana)': boy,
  'Jane (from Tarzan)': girl,
  'Megara (from Hercules)': girl,
  'Mushu (from Mulan)': lion,
  'Maleficent (from Sleeping Beauty)': princess,
  'Captain Hook (from Peter Pan)': boy,
  'Ursula (from The Little Mermaid)': princess,
  'King Triton (from The Little Mermaid)': prince,
  'Beast (from Beauty and the Beast)': bear,
  'Evil Queen (from Snow White)': princess,
  'Flynn Rider (from Tangled)': boy,
  'Maximus (from Tangled)': bear,
  'Merida (from Brave)': girl,
  'WALL-E': robot,
  'EVE': robot,
  'Remy': mouse,
  'Mr. Incredible': boy,
  'Elastigirl (from The Incredibles)': girl,
  'Syndrome (from The Incredibles)': boy,
  'Jack Sparrow (from Pirates of the Caribbean)': prince,
  'John Smith': boy,
  "Kuzco (from The Emperor's New Groove)": prince,
  "Kronk (from The Emperor's New Groove)": prince,
  'Lilo': girl,
  'Stitch': monster,
  'Jumba and Pleakley (from Lilo & Stitch)': monster,
  'Li Shang (from Mulan)': boy,
  'Fairy Godmother (from Cinderella)': princess,
  'Baloo (from The Jungle Book)': bear,
  'Bagheera (from The Jungle Book)': dog,
  'Mowgli (from The Jungle Book)': boy,
  'Robin Hood': dog,
  'Pumbaa and Timon (from The Lion King)': dog,
  'Zazu (from The Lion King)': bird,
  'Jafar (from Aladdin)': prince,
  'Judy Hopps': mouse,
  'Miguel (from Coco)': boy,
  'Ralph (from Wreck-it Ralph)': boy,
  'Vanellope von Schweetz (from Wreck-it Ralph)': girl,
  'Joy (from Inside Out)': girl,
  'Sadness (from Inside Out)': girl,
  'Baymax': robot,
  'this crying baby': baby,
}

export const DisneyQuestions = {
  princess: 'Is your character a princess?', // Done
  prince: 'Is your character a prince?', // Done
  magic: 'Does your character have magical powers?', // Done
  animal: 'Is your character an animal?', // Done
  has_sidekick: 'Does your character have a sidekick or companion?', // Done
  is_sidekick: 'Is your character a sidekick or companion?', // Done
  sing: 'Does your character have a singing role?', // Done
  love: 'Does your character have a love interest?', // Done
  mythical: 'Is your character a mythical being?', // Done
  phrase: 'Does your character have a memorable catchphrase or song?', // Done
  once: 'Does your character appear in multiple Disney films?', // Done
  main: 'Is your character the protagonist?', // Done
  bad: 'Is your character a villain or an antagonist?', // Done
  classic: 'Is your character part of a classic Disney animated film?', // Done
  history: 'Is your character based on a real historical figure or legend?', // Done
  stepmother: 'Does your character have a stepmother or wicked relative?', // Done
  mentor: 'Does your character have a mentor or guide figure?', // Done
  royal: 'Is your character a member of royalty or nobility?', // Done
  hair: 'Does your character have a distinct hairstyle or headwear?', // Done
  water: 'Is your character from an underwater or ocean-themed story?', // Done
  season: 'Is your character associated with a specific season or weather?', // Done
  strong: 'Does your character possess superhuman strength?', // Done
  tragic: 'Does your character have a tragic backstory?', // Done
  accent: 'Does your character have a distinct accent or voice?', // Done
  object: 'Is your character a talking inanimate object?', // Done
  blue: 'Is your character mainly associated with the color blue?', // Done
  red: 'Is your character mainly associated with the color red?', // Done
  green: 'Is your character mainly associated with the color green?',
  hairless: 'Does your character have hair or fur?', // Done
  human: 'Does your character have a human-like appearance?', // Done
  female: 'Is your character female?', // Done
  eyes: 'Does your character not have two eyes?', // Done
  child: 'Does your character ever appear as a young child?', // Done
  monster: 'Is your character a monster?', // Done
  recent: 'Does your character appear in a Disney movie within the last 5 years?', // Done
}