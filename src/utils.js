export const queryString = (query, startWithQuestionMark = true) => {
  // Remove Question Mark
  // ?next=home&sort=desc
  if (startWithQuestionMark) {
    query = query.slice(1, query.length);
  }

  const parsedUrls = query.split('&');
  let output = [];

  for (const url of parsedUrls) {
    const [key, val] = url.split('=');
    output.push({ [key]: val });
  }

  return output;
  // or use https://www.npmjs.com/package/query-string
};
