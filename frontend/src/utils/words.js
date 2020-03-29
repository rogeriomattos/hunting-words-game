const wordsText = [
    'Apneia',
    'Dermatite',
    'Flictema',
    'Intravenoso',
    'Taquipneia',
    'Urticária',
]

const words = wordsText.map((word) => ({
    'word': word, 
    'isFinded': false
}));

export default function getWords(){ return words;};
