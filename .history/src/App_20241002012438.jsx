import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  // Define a placeholder image URL
  const placeholderImage = "https://via.placeholder.com/150x90?text=No+Image";

  return (
    <div className="app-container">
      <h1>Random News Feed</h1>
      <div className="list-of-news">
        {stories.map((story, index) => (
          <div key={index} className="news-item" style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              {/* Use placeholder image if story.image_url is missing */}
              <img
                className="news-image"
                src={story.image_url ? story.image_url : placeholderImage} // Check for image_url, fallback to placeholder
                alt={story.title}
                style={{ width: '150px', height: '90px', display:
