export function validateSorting(value: string): boolean {
  const properties = value.split(",");
  if (properties.length < 1) {
    throw new Error(`No sorting value passed`);
  }
  if (duplicatedValues(properties).length > 0) {
    throw new Error(`Duplicated sorting values ${duplicatedValues}`);
  }
  return properties.every((property) => {
    if (!startsWithAlphanumeric(property)) {
      if (!property.startsWith("-")) {
        throw new Error(`Invalid sorting value: ${property}`);
      }
    }
    return true;
  });
}

function startsWithAlphanumeric(value: string): boolean {
  const regex = new RegExp(/^\w/, "i");
  return regex.test(value);
}

function duplicatedValues(values: string[]): string[] {
  return values.filter((item, index) => values.indexOf(item) !== index);
}
