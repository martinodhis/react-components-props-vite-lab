function Article({ title, date = "January 1, 1970", preview, minutesToRead = 0 }) {
  // Calculate emojis for minutes to read
  const getReadTimeEmojis = (minutes = 0) => {
    if (!minutes) {
      return "0 min read";
    }

    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const bentos = Math.ceil(minutes / 10);
      return "🍱".repeat(bentos) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{getReadTimeEmojis(minutesToRead)}</small>
    </article>
  );
}

export default Article;