export function pluralize(word: string, count: number): string {
  if (count === 1) return word;

  // Very basic irregular handling
  const irregulars: Record<string, string> = {
    person: "people",
    man: "men",
    woman: "women",
    child: "children",
    tooth: "teeth",
    foot: "feet",
    mouse: "mice",
    goose: "geese",
  };

  if (irregulars[word.toLowerCase()]) {
    return irregulars[word.toLowerCase()];
  }

  // Naive pluralization rules
  if (word.endsWith("y") && !/[aeiou]y$/i.test(word)) {
    return word.slice(0, -1) + "ies";
  } else if (
    word.endsWith("s") || word.endsWith("x") || word.endsWith("z") ||
    word.endsWith("ch") || word.endsWith("sh")
  ) {
    return word + "es";
  } else {
    return word + "s";
  }
}
