import React, { useState } from 'react';
import { BookOpen, Video, Headphones, FileText, Download, Users, Search, Calendar, Tag, Eye, Clock, ChevronRight } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Sermon Library",
      description: "Watch or listen to past sermons from our pastors and guest speakers.",
      icon: <Video className="w-6 h-6" />,
      category: "sermons",
      link: "#"
    },
    {
      id: 2,
      title: "Bible Study Guides",
      description: "Download study materials to help you grow deeper in God's Word.",
      icon: <BookOpen className="w-6 h-6" />,
      category: "studies",
      link: "#"
    },
    {
      id: 3,
      title: "Podcast",
      description: "Stay encouraged with weekly podcasts from our ministry team.",
      icon: <Headphones className="w-6 h-6" />,
      category: "audio",
      link: "#"
    },
    {
      id: 4,
      title: "Articles & Devotionals",
      description: "Read articles and devotionals to inspire your daily walk with Christ.",
      icon: <FileText className="w-6 h-6" />,
      category: "reading",
      link: "#"
    },
    {
      id: 5,
      title: "Small Group Materials",
      description: "Resources and guides for leading or participating in small groups.",
      icon: <Users className="w-6 h-6" />,
      category: "groups",
      link: "#"
    },
    {
      id: 6,
      title: "Downloads",
      description: "Free resources including prayer guides, reading plans, and worksheets.",
      icon: <Download className="w-6 h-6" />,
      category: "downloads",
      link: "#"
    }
  ];

  const recentSermons = [
    {
      id: 1,
      title: "Faith in the Storm",
      speaker: "Pastor John Smith",
      date: "August 4, 2025",
      series: "Walking by Faith",
      duration: "45 min",
      views: "1.2k",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      date: "July 28, 2025",
      series: "Spiritual Disciplines",
      duration: "38 min",
      views: "980",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Love Your Neighbor",
      speaker: "Pastor Michael Brown",
      date: "July 21, 2025",
      series: "Greatest Commandments",
      duration: "42 min",
      views: "1.5k",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop"
    }
  ];

  const studyGuides = [
    {
      id: 1,
      title: "Romans Study Guide",
      description: "A 12-week deep dive into Paul's letter to the Romans",
      downloads: "2.1k",
      pages: "64 pages",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Prayer & Fasting Guide",
      description: "21-day journey to deepen your prayer life",
      downloads: "1.8k",
      pages: "32 pages",
      level: "Beginner"
    },
    {
      id: 3,
      title: "Leadership in Ministry",
      description: "Practical guide for church leaders and volunteers",
      downloads: "945",
      pages: "48 pages",
      level: "Advanced"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Resources' },
    { key: 'sermons', label: 'Sermons' },
    { key: 'studies', label: 'Bible Studies' },
    { key: 'audio', label: 'Audio' },
    { key: 'reading', label: 'Reading' },
    { key: 'groups', label: 'Small Groups' },
    { key: 'downloads', label: 'Downloads' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero d-flex align-items-center text-white bg-dark py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Resources</h1>
          <p className="lead mb-4">Explore sermons, studies, podcasts, and devotionals to grow in faith.</p>
          
          {/* Search Bar */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {categories.map(category => (
              <button
                key={category.key}
                className={`btn ${selectedCategory === category.key ? 'btn-gold' : 'btn-outline-secondary'} btn-sm`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold section-title">Our Resources</h2>
              <p className="lead text-muted">Tools and materials to strengthen your spiritual journey</p>
            </div>
          </div>

          <div className="row">
            {filteredResources.map(resource => (
              <div className="col-lg-4 col-md-6 mb-4" key={resource.id}>
                <div className="card h-100 border-0 shadow-sm card-hover">
                  <div className="card-body p-4 text-center">
                    <div className="light-bg-gold p-3 rounded-circle text-gold mb-3 d-inline-block">
                      {resource.icon}
                    </div>
                    <h5 className="fw-bold">{resource.title}</h5>
                    <p className="text-muted">{resource.description}</p>
                    <a href={resource.link} className="text-gold text-decoration-none fw-bold d-flex align-items-center justify-content-center">
                      Explore <ChevronRight className="ms-1" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No resources found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h2 className="display-6 fw-bold">Recent Sermons</h2>
              <a href="#" className="text-gold text-decoration-none fw-bold">View All Sermons <ChevronRight className="ms-1" size={16} /></a>
            </div>
          </div>

          <div className="row">
            {recentSermons.map(sermon => (
              <div className="col-lg-4 col-md-6 mb-4" key={sermon.id}>
                <div className="card border-0 shadow-sm card-hover">
                  <img src={sermon.thumbnail} className="card-img-top" alt={sermon.title} style={{height: '200px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <Tag className="text-gold me-2" size={16} />
                      <small className="text-gold fw-bold">{sermon.series}</small>
                    </div>
                    <h5 className="fw-bold mb-2">{sermon.title}</h5>
                    <p className="text-muted mb-2">by {sermon.speaker}</p>
                    <div className="d-flex align-items-center justify-content-between text-muted small mb-3">
                      <div className="d-flex align-items-center">
                        <Calendar className="me-1" size={14} />
                        {sermon.date}
                      </div>
                      <div className="d-flex align-items-center">
                        <Clock className="me-1" size={14} />
                        {sermon.duration}
                      </div>
                      <div className="d-flex align-items-center">
                        <Eye className="me-1" size={14} />
                        {sermon.views}
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#" className="btn btn-gold btn-sm flex-grow-1">Watch</a>
                      <a href="#" className="btn btn-outline-gold btn-sm flex-grow-1">Listen</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Guides */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h2 className="display-6 fw-bold">Popular Study Guides</h2>
              <a href="#" className="text-gold text-decoration-none fw-bold">View All Guides <ChevronRight className="ms-1" size={16} /></a>
            </div>
          </div>

          <div className="row">
            {studyGuides.map(guide => (
              <div className="col-lg-4 col-md-6 mb-4" key={guide.id}>
                <div className="card h-100 border-0 shadow-sm card-hover">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="light-bg-gold p-2 rounded">
                        <BookOpen className="w-5 h-5 text-gold" />
                      </div>
                      <span className={`badge ${guide.level === 'Beginner' ? 'bg-success' : guide.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'}`}>
                        {guide.level}
                      </span>
                    </div>
                    <h5 className="fw-bold mb-2">{guide.title}</h5>
                    <p className="text-muted mb-3">{guide.description}</p>
                    <div className="d-flex justify-content-between text-muted small mb-3">
                      <span><Download className="me-1" size={14} />{guide.downloads} downloads</span>
                      <span>{guide.pages}</span>
                    </div>
                    <button className="btn btn-gold w-100">Download Free</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Stay Connected</h2>
          <p className="lead mb-4">
            Subscribe to our newsletter to get the latest sermons, resources, and updates delivered to your inbox.
          </p>
          <form className="d-flex justify-content-center gap-2 flex-wrap" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              className="form-control form-control-lg"
              style={{maxWidth: '400px'}}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-gold btn-lg px-4">
              Subscribe
            </button>
          </form>
          <p className="small text-muted mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};

export default Resources;