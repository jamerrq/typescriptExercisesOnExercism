export function count(word: string) {
    let counts: Map<string, number> = new Map();
    let regexForWords = /([a-zA-Z\d])+/g;
    let apostropheWords = new RegExp(`${regexForWords.source}'${regexForWords.source}`, 'g');
    let apWords = word.match(apostropheWords);
    // console.log('apWords', apWords);
    word = word.replaceAll(apostropheWords, '');
    let words = word.match(regexForWords) as string[];
    if (apWords) words = words?.concat(apWords);
    words = words?.map(word => word.toLowerCase());
    // console.log('words', words);
    words?.forEach(word => {
        let countsForWord = counts.get(word) || 0;
        counts.set(word, countsForWord + 1);
    });
    return counts;
}
