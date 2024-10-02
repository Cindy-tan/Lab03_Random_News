import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="app-container">
      <h1>Random News Feed</h1>
      <div className="news-list">
        {stories.map((story, index) => (
          <div key={index} className="news-item" style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
            {story.image_url && (
              <img
                className="story-image"
                src={story.image_url}
                alt={story.title}
                style={{ width: '150px', height: '150px', display: 'block', marginBottom: '10px' }}
              />
            )}
            <div>
              <h2>{story.creator}</h2>
              <p>By  {new Date(story.pubDate).toLocaleDateString()}</p>
              <p>{story.description}</p>
              <a href={story.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
