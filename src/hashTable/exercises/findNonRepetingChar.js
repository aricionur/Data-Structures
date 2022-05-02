/**
 * The Javascript built-in hash table 'Map' was used.
 *
 * Map class does guarantee the insertion order of properies but Object(JSON) object does not!!! (be carefull)
 */

const findFirstNonRepeatingChar = string => {
  if (!string) return string

  const charFrequencies = new Map()

  for (const ch of string) {
    if (charFrequencies.get(ch)) charFrequencies.set(ch, charFrequencies.get(ch) + 1)
    else charFrequencies.set(ch, 1)
  }

  for (const [ch, freq] of charFrequencies) if (freq === 1) return ch
}

module.exports = { findFirstNonRepeatingChar }
