import type { RoleDescription } from "../../types/RoleDescription";

export const ROLE_DESCRIPTIONS: RoleDescription[] = [
  {
    id: 'don',
    picture: '/img/roles/don.jpg',
    name: { ua: 'Дон', en: 'Don' },
    flavorText: {
      ua: 'Колись місто боялось поліції. Тепер воно боїться тебе. Твоя тінь довша за тінь закону.',
      en: 'Once, the city feared the police. Now it fears you. Your shadow falls longer than the law\'s ever did.',
    },
    goal: {
      ua: 'Знищити всіх, хто не присягнув тобі, і забрати місто собі.',
      en: 'Destroy everyone who has not sworn loyalty to you, and claim the city as your own.',
    },
    nightAction: {
      ua: 'Прокинься вночі і обери будь-кого для страти.',
      en: 'Wake at night and choose anyone to execute.',
    },
  },
  {
    id: 'mafia',
    picture: '/img/roles/mafia.jpg',
    name: { ua: 'Мафія', en: 'Mafia' },
    flavorText: {
      ua: 'Вдень ти посміхаєшся сусідам, тиснеш руки, граєш роль доброчесного громадянина. Вночі маска спадає.',
      en: 'By day you smile at your neighbors, shake their hands, play the part of an upstanding citizen. By night, the mask falls away.',
    },
    goal: {
      ua: 'Служити дону і допомогти мафії захопити місто повністю.',
      en: 'Serve the Don and help the Mafia seize total control of the city.',
    },
    nightAction: {
      ua: 'Прокинься вночі і обери будь-кого для страти разом з доном.',
      en: 'Wake at night and choose anyone to execute alongside the Don.',
    },
  },
  {
    id: 'commissioner',
    picture: '/img/roles/commisioner.jpg',
    name: { ua: 'Комісар', en: 'Commissioner' },
    flavorText: {
      ua: 'Місто давно перестало бути тим, яким ти його пам\'ятаєш. Друзі зникають, сусіди мовчать.',
      en: 'The city stopped being the place you remember long ago. Friends vanish, neighbors go silent, and morning keeps bringing new names of the dead.',
    },
    goal: {
      ua: 'Вирахувати й знищити всю мафію, що ховається серед мирних.',
      en: 'Root out and destroy every mafioso hiding among the innocent.',
    },
    nightAction: {
      ua: 'Прокинься вночі і дізнайся справжню роль одного гравця.',
      en: 'Wake at night and learn the true role of one player.',
    },
  },
  {
    id: 'doctor',
    picture: '/img/roles/doctor.jpg',
    name: { ua: 'Лікар', en: 'Doctor' },
    flavorText: {
      ua: 'Смерть приходить щоночі, непрохана, і стукає в чиїсь двері байдужою рукою.',
      en: 'Death comes every night, uninvited, and knocks on someone\'s door with an indifferent hand.',
    },
    goal: {
      ua: 'Зберегти якомога більше життів мирного населення міста.',
      en: 'Save as many innocent lives as possible.',
    },
    nightAction: {
      ua: 'Прокинься вночі і врятуй одного гравця від смерті.',
      en: 'Wake at night and save one player from death.',
    },
  },
  {
    id: 'bodyguard',
    picture: '/img/roles/bodyguard.jpg',
    name: { ua: 'Тілохранитель', en: 'Bodyguard' },
    flavorText: {
      ua: 'Колись ти дав клятву - тихо, без свідків, але назавжди. Відтоді чуже життя стало для тебе важливішим за власне.',
      en: 'Once, you swore an oath - quietly, with no witnesses, but forever. Since then, someone else\'s life has mattered more to you than your own.',
    },
    goal: {
      ua: 'Захистити свого підопічного будь-якою ціною, навіть власним життям.',
      en: 'Protect your charge at any cost, even your own life.',
    },
    nightAction: {
      ua: 'Прокинься вночі і обери, кого захищати цієї ночі.',
      en: 'Wake at night and choose who to guard tonight.',
    },
  },
  {
    id: 'courtesan',
    picture: '/img/roles/courtesan.jpg',
    name: { ua: 'Повія', en: 'Courtesan' },
    flavorText: {
      ua: 'Твоє запрошення шепоче тихіше за вітер, але відмовити йому неможливо.',
      en: 'Your invitation whispers quieter than the wind, yet no one can refuse it. Whoever answers your call disappears from the night entirely - and by morning, remembers nothing of what they meant to do.',
    },
    goal: {
      ua: 'Непомітно керувати ходом гри, забираючи чужі голоси в потрібний момент.',
      en: 'Quietly steer the game by silencing votes at the right moment.',
    },
    nightAction: {
      ua: 'Прокинься вночі і обери, до кого прийти. Ця людина завтра не голосуватиме і не братиме участь в обговоренні.',
      en: 'Wake at night and choose who to visit. That person will not vote or take part in the discussion the next day.',
    },
  },
  {
    id: 'civilian',
    picture: '/img/roles/civilian.jpg',
    name: { ua: 'Мирний житель', en: 'Civilian' },
    flavorText: {
      ua: 'Твоє життя було сповнене буденної рутини. А потім прийшла ніч...',
      en: 'Your life was full of ordinary routine - work, home, quiet evenings. Then night fell, and with it came a horror that now lives in every shadow of this city.',
    },
    goal: {
      ua: 'Знайти й стратити всю мафію, поки місто ще не спорожніло.',
      en: 'Find and execute every mafioso before the city is left empty.',
    },
    nightAction: {
      ua: 'Немає нічної дії - твоя сила лише в голосі вдень.',
      en: 'No night action - your only power is your voice by day.',
    },
  },
];