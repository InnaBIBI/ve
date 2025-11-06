import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Star, ChevronRight, Wifi, Thermometer, Settings, Smartphone, Shield, Clock, Users, MessageSquare, Zap, Leaf } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Умное управление",
      description: "Беспроводной пульт с радиусом действия до 50 метров для удобного управления"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Датчики микроклимата",
      description: "Мониторинг температуры, контроль влажности и качества воздуха в реальном времени"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Гибкие сценарии",
      description: "Настройка автоматических режимов по расписанию или условиям окружающей среды"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Мобильное приложение",
      description: "Управляйте окнами из любой точки мира через iOS и Android приложение"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Безопасность",
      description: "Защита от взлома и осадков"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Режимы работы",
      description: "Ночные, дневные и экономичные режимы работы"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-8 h-8 text-[#96C9CD]" />,
      title: "Энергоэффективность",
      description: "Экономит 45% энергии, чем превосходит аналоги"
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#96C9CD]" />,
      title: "Здоровый микроклимат",
      description: "Автоматический контроль влажности и температуры для комфортного самочувствия"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#96C9CD]" />,
      title: "Автоматизация 24/7",
      description: "Система работает круглосуточно, не требуя вашего участия и контроля"
    }
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/3crrgr1p5tsy5')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка сети');
        return response.json();
      })
      .then(data => {
        // Фильтруем только опубликованные отзывы
        const published = data.filter(item =>
          item.published && item.published.trim().toLowerCase() === 'yes'
        );
        setTestimonials(published);
        setLoading(false);
      })
      .catch(error => {
        console.error('Не удалось загрузить отзывы:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#454343] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#454343]/95 backdrop-blur-sm z-50 border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-[#96C9CD]">ВЕТЕР</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Главная', 'Преимущества', 'Возможности', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#96C9CD] ${
                    activeSection === item.toLowerCase() ? 'text-[#96C9CD]' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#96C9CD]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#454343] border-t border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Главная', 'Преимущества', 'Возможности', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#96C9CD] w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

{/* Hero Section */}
<section
  id="главная"
  className="pt-16 min-h-screen flex items-center relative"
  style={{
    backgroundImage: `url('https://raw.githubusercontent.com/InnaBIBI/my-website-assets/main/5206446239560892612.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#454343'
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          <span className="text-[#96C9CD] drop-shadow-lg">Умные окна</span> для идеального микроклимата
        </h1>
        <p className="text-xl text-white leading-relaxed drop-shadow-lg">
          Автоматизированная система контроля окон на основе датчиков
          температуры, влажности и качества воздуха
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('контакты')}
            className="bg-[#96C9CD] text-[#454343] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#85b8bc] transition-colors drop-shadow-lg"
          >
            Заказать систему
          </button>
          <button
            onClick={() => scrollToSection('возможности')}
            className="border-2 border-[#96C9CD] text-[#96C9CD] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#96C9CD]/10 transition-colors drop-shadow-lg"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Advantages Section */}
      <section id="преимущества" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Преимущества системы</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-[#96C9CD] transition-colors">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#96C9CD]">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="возможности" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Возможности системы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-[#96C9CD] transition-colors">
                <div className="text-[#96C9CD] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<section id="отзывы" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">Отзывы клиентов</h2>
    </div>

    {loading ? (
      <div className="text-center text-gray-300 text-xl">Загрузка отзывов...</div>
    ) : testimonials.length > 0 ? (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-700/50 p-6 rounded-xl border border-gray-600">
            <div className="flex mb-4">
              {[...Array(parseInt(testimonial.rating) || 0)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-[#96C9CD]" />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center text-gray-400 text-lg">Отзывов пока нет.</div>
    )}
  </div>
</section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение 1 часа
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700/50 p-8 rounded-xl border border-gray-600">
              <form
  action="https://formspree.io/f/movprnyv"
  method="POST"
  className="space-y-6"
>
  <div>
    <label className="block text-sm font-medium mb-2">Имя</label>
    <input
      type="text"
      name="Имя"
      className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-[#96C9CD]"
      placeholder="Ваше имя"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Телефон</label>
    <input
      type="tel"
      name="Телефон"
      className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-[#96C9CD]"
      placeholder="+7 (___) ___-__-__"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input
      type="email"
      name="Email"
      className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-[#96C9CD]"
      placeholder="your@email.com"
    />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Комментарий</label>
    <textarea
      name="Комментарий"
      rows={4}
      className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-[#96C9CD]"
      placeholder="Расскажите о вашем проекте..."
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-[#96C9CD] text-[#454343] py-3 rounded-lg font-semibold hover:bg-[#85b8bc] transition-colors flex items-center justify-center"
  >
    Отправить заявку
    <ChevronRight className="w-5 h-5 ml-2" />
  </button>
</form>
            </div>
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5 text-[#96C9CD]" />
                <span>veter_company@list.ru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="ml-2 text-lg font-bold text-[#96C9CD]">ВЕТЕР</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MessageSquare className="w-4 h-4" />
              <span>© 2025 ВЕТЕР. Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
