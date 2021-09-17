const alternatingCharacters = (s: string): number =>
  s.length - s.replace(/(.)\1+/g, '$1').length
