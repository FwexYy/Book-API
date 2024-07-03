export const shortenDescription = (description, maxLength = 500) => {
  return description?.length > maxLength
    ? `${description.substring(0, maxLength)}...`
    : description;
};
