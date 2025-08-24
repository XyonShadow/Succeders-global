import React, { useState } from 'react';
import { BookOpen, Video, Headphones, FileText, Download, Users, ChevronRight, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Latest Sermons",
      description: "Watch or listen to our most recent messages and sermon series.",
      icon: <Video className="w-6 h-6" />,
      category: "sermons",
    },
    {
      id: 2,
      title: "Bible Study Guides",
      description: "Download comprehensive study materials for personal or group use.",
      icon: <BookOpen className="w-6 h-6" />,
      category: "studies",
    },
    {
      id: 3,
      title: "Succeeders Audio",
      description: "Stay encouraged with our audio series.",
      icon: <Headphones className="w-6 h-6" />,
      category: "audio",
    },
    {
      id: 4,
      title: "Articles & Messages",
      description: "Read inspiring articles and messages for spiritual growth.",
      icon: <FileText className="w-6 h-6" />,
      category: "reading",
    }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'sermons', label: 'Sermons' },
    { key: 'studies', label: 'Studies' },
    { key: 'audio', label: 'Audio' },
    { key: 'reading', label: 'Reading' }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold section-title">Resources for Growth</h2>
            <p className="lead text-muted">Explore sermons, studies, and materials to deepen your faith journey</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="row mb-4">
          <div className="col-12">
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
        </div>

        {/* Resources Grid */}
        <div className="row mb-5">
          {filteredResources.map(resource => (
            <div className="col-lg-3 col-md-6 mb-4" key={resource.id}>
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4 text-center">
                  <div className="light-bg-gold bg-opacity-10 p-3 rounded-circle text-gold mb-3 d-inline-block">
                    {resource.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{resource.title}</h5>
                  <p className="text-muted mb-3">{resource.description}</p>
                  <Link to="/resources" className="text-gold text-decoration-none fw-bold d-flex align-items-center justify-content-center">
                      Explore <ChevronRight className="ms-1" size={16} />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;