import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="app-container">
      <h1>Random News Feed</h1>
      <div className="list-of-news">
        {stories.map((story, index) => (
          <div key={index} className="news-item" style={{ marginBottom: "20px", padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              {story.image_url && (
                <img
                  className="news-image"
                  src={story.image_url}
                  alt={story.title}
                  style={{ width: '150px', height: '90px', display: 'block', marginRight: '20px' }}
                />
              )}
              <div>
                <a href={story.link}  target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>
                  <h2className="image-title">{story.title}</h2>
                </a>
                <h3>By: {story.creator}</h3>
              </div>
            </div>
            <p style={{ marginTop: '10px' }}>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
