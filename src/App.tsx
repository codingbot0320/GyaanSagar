import React, { useState, useEffect } from 'react';
import SignInPage from './components/SignInPage';
import { 
  BookOpen, 
  Trophy, 
  Star, 
  Users, 
  Play, 
  Award, 
  Target,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
  Globe,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';


// Language translations
const translations = {
  en: {
    nav: {

      signIn: "Sign In"
    },
    hero: {
      title1: "Learn, Play,",
      title2: "Achieve!",
      subtitle: "Transform your education journey with interactive games, earn rewards, and unlock your potential with India's most engaging learning platform.",
      startLearning: "Start Learning",
      watchDemo: "Watch Demo",
      animatedText: {
        welcome: "Welcome to the Future of Learning!",
        discover: "Discover Amazing Games",
        achieve: "Achieve Your Dreams",
        explore: "Explore New Worlds"
      }
    },
    features: {
      title: "Why Choose Gyaan Sagar?",
      subtitle: "Experience education like never before with our gamified learning approach",
      playToLearn: {
        title: "Play to Learn",
        description: "Interactive games that make learning fun and engaging for every subject"
      },
      earnRewards: {
        title: "Earn Rewards",
        description: "Collect points, badges, and unlock new levels as you progress"
      },
      studyMaterials: {
        title: "Learning Arena",
        description: "Compete, practice, and grow through fun challenges"
      }
    },
    games: {
      title: "Popular Learning Games",
      subtitle: "Dive into our most loved educational games and start your learning adventure",
      viewAll: "View All Games",
      difficulty: {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard"
      },
      gameList: {
        mathQuest: {
          title: "Math Quest",
          description: "Adventure through number lands"
        },
        scienceLab: {
          title: "Science Lab",
          description: "Conduct virtual experiments"
        },
        historyHeroes: {
          title: "History Heroes",
          description: "Time travel learning adventure"
        },
        grammarGalaxy: {
          title: "Grammar Galaxy",
          description: "Master language skills in space"
        }
      }
    },
    footer: {
      mission: "Empowering rural students across India with gamified learning experiences that make education accessible, engaging, and effective.",
      quickLinks: "Quick Links",
      support: "Support",
      links: {
        home: "Home",
        aboutUs: "About Us",
        games: "Games",
        studyMaterials: "Study Materials",
        leaderboard: "Leaderboard",
        contact: "Contact",
        helpCenter: "Help Center",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        parentGuide: "Parent Guide",
        teacherResources: "Teacher Resources"
      },
      copyright: "© 2024 Gyaan Sagar. All rights reserved.",
      motto: "\"Every child deserves the joy of learning\" ✨"
    }
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      contact: "संपर्क",
      signIn: "साइन इन"
    },
    hero: {
      title1: "सीखें, खेलें,",
      title2: "सफल हों!",
      subtitle: "इंटरैक्टिव गेम्स के साथ अपनी शिक्षा यात्रा को बदलें, पुरस्कार अर्जित करें, और भारत के सबसे आकर्षक शिक्षा प्लेटफॉर्म के साथ अपनी क्षमता को अनलॉक करें।",
      startLearning: "सीखना शुरू करें",
      watchDemo: "डेमो देखें",
      animatedText: {
        welcome: "सीखने के भविष्य में आपका स्वागत है!",
        discover: "अद्भुत गेम्स खोजें",
        achieve: "अपने सपनों को पूरा करें",
        explore: "नई दुनिया का अन्वेषण करें"
      }
    },
    features: {
      title: "ज्ञान सागर क्यों चुनें?",
      subtitle: "हमारे गेमिफाइड लर्निंग एप्रोच के साथ शिक्षा का अनुभव पहले जैसा कभी नहीं करें",
      playToLearn: {
        title: "खेल कर सीखें",
        description: "इंटरैक्टिव गेम्स जो हर विषय के लिए सीखने को मजेदार और आकर्षक बनाते हैं"
      },
      earnRewards: {
        title: "पुरस्कार अर्जित करें",
        description: "अंक इकट्ठा करें, बैज पाएं, और प्रगति के साथ नए स्तर अनलॉक करें"
      },
      studyMaterials: {
        title: "अध्ययन सामग्री",
        description: "अपने पाठ्यक्रम के अनुकूल व्यापक अध्ययन संसाधनों तक पहुंच प्राप्त करें"
      }
    },
    games: {
      title: "लोकप्रिय शिक्षा गेम्स",
      subtitle: "हमारे सबसे पसंदीदा शैक्षिक गेम्स में डुबकी लगाएं और अपनी सीखने की यात्रा शुरू करें",
      viewAll: "सभी गेम्स देखें",
      difficulty: {
        easy: "आसान",
        medium: "मध्यम",
        hard: "कठिन"
      },
      gameList: {
        mathQuest: {
          title: "गणित क्वेस्ट",
          description: "संख्याओं की भूमि में रोमांच"
        },
        scienceLab: {
          title: "विज्ञान प्रयोगशाला",
          description: "वर्चुअल प्रयोग करें"
        },
        historyHeroes: {
          title: "इतिहास के नायक",
          description: "समय यात्रा सीखने का रोमांच"
        },
        grammarGalaxy: {
          title: "व्याकरण गैलेक्सी",
          description: "अंतरिक्ष में भाषा कौशल में महारत हासिल करें"
        }
      }
    },
    footer: {
      mission: "भारत भर के ग्रामीण छात्रों को गेमिफाइड लर्निंग अनुभवों के साथ सशक्त बनाना जो शिक्षा को सुलभ, आकर्षक और प्रभावी बनाते हैं।",
      quickLinks: "त्वरित लिंक",
      support: "सहायता",
      links: {
        home: "होम",
        aboutUs: "हमारे बारे में",
        games: "गेम्स",
        studyMaterials: "अध्ययन सामग्री",
        leaderboard: "लीडरबोर्ड",
        contact: "संपर्क",
        helpCenter: "सहायता केंद्र",
        privacyPolicy: "गोपनीयता नीति",
        termsOfService: "सेवा की शर्तें",
        parentGuide: "अभिभावक गाइड",
        teacherResources: "शिक्षक संसाधन"
      },
      copyright: "© 2024 ज्ञान सागर. सभी अधिकार सुरक्षित।",
      motto: "\"हर बच्चा सीखने की खुशी का हकदार है\" ✨"
    }
  },
  or: {
    nav: {
      home: "ଘର",
      about: "ଆମ ବିଷୟରେ",
      contact: "ଯୋଗାଯୋଗ",
      signIn: "ସାଇନ୍ ଇନ୍"
    },
    hero: {
      title1: "ଶିଖନ୍ତୁ, ଖେଳନ୍ତୁ,",
      title2: "ସଫଳ ହୁଅନ୍ତୁ!",
      subtitle: "ଇଣ୍ଟରାକ୍ଟିଭ୍ ଗେମ୍ସ ସହିତ ଆପଣଙ୍କ ଶିକ୍ଷା ଯାତ୍ରାକୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ, ପୁରସ୍କାର ଅର୍ଜନ କରନ୍ତୁ, ଏବଂ ଭାରତର ସବୁଠାରୁ ଆକର୍ଷଣୀୟ ଶିକ୍ଷା ପ୍ଲାଟଫର୍ମ ସହିତ ଆପଣଙ୍କ ସାମର୍ଥ୍ୟକୁ ଅନଲକ୍ କରନ୍ତୁ।",
      startLearning: "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ",
      watchDemo: "ଡେମୋ ଦେଖନ୍ତୁ",
      animatedText: {
        welcome: "ଶିଖିବାର ଭବିଷ୍ୟତରେ ସ୍ୱାଗତ!",
        discover: "ଅଦ୍ଭୁତ ଗେମ୍ସ ଆବିଷ୍କାର କରନ୍ତୁ",
        achieve: "ଆପଣଙ୍କ ସ୍ୱପ୍ନ ହାସଲ କରନ୍ତୁ",
        explore: "ନୂତନ ଜଗତ ଅନ୍ୱେଷଣ କରନ୍ତୁ"
      }
    },
    features: {
      title: "ଜ୍ଞାନ ସାଗର କାହିଁକି ବାଛିବେ?",
      subtitle: "ଆମର ଗେମିଫାଇଡ୍ ଲର୍ନିଂ ଆପ୍ରୋଚ୍ ସହିତ ଶିକ୍ଷାର ଅନୁଭବ ପୂର୍ବରୁ କେବେ ନଥିଲା",
      playToLearn: {
        title: "ଖେଳି ଶିଖନ୍ତୁ",
        description: "ଇଣ୍ଟରାକ୍ଟିଭ୍ ଗେମ୍ସ ଯାହା ପ୍ରତ୍ୟେକ ବିଷୟ ପାଇଁ ଶିଖିବାକୁ ମଜାଦାର ଏବଂ ଆକର୍ଷଣୀୟ କରିଥାଏ"
      },
      earnRewards: {
        title: "ପୁରସ୍କାର ଅର୍ଜନ କରନ୍ତୁ",
        description: "ପଏଣ୍ଟ ସଂଗ୍ରହ କରନ୍ତୁ, ବ୍ୟାଜ୍ ପାଆନ୍ତୁ, ଏବଂ ପ୍ରଗତି ସହିତ ନୂତନ ସ୍ତର ଅନଲକ୍ କରନ୍ତୁ"
      },
      studyMaterials: {
        title: "ଅଧ୍ୟୟନ ସାମଗ୍ରୀ",
        description: "ଆପଣଙ୍କ ପାଠ୍ୟକ୍ରମ ସହିତ ସମାନ ବ୍ୟାପକ ଅଧ୍ୟୟନ ସମ୍ବଳଗୁଡ଼ିକୁ ପ୍ରବେଶ କରନ୍ତୁ"
      }
    },
    games: {
      title: "ଲୋକପ୍ରିୟ ଶିକ୍ଷା ଗେମ୍ସ",
      subtitle: "ଆମର ସବୁଠାରୁ ପ୍ରିୟ ଶିକ୍ଷାଗତ ଗେମ୍ସରେ ଡୁବି ଯାଆନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ଶିଖିବା ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
      viewAll: "ସମସ୍ତ ଗେମ୍ସ ଦେଖନ୍ତୁ",
      difficulty: {
        easy: "ସହଜ",
        medium: "ମଧ୍ୟମ",
        hard: "କଠିନ"
      },
      gameList: {
        mathQuest: {
          title: "ଗଣିତ କ୍ୱେଷ୍ଟ",
          description: "ସଂଖ୍ୟା ଦେଶରେ ଦୁଃସାହସିକ କାର୍ଯ୍ୟ"
        },
        scienceLab: {
          title: "ବିଜ୍ଞାନ ଲ୍ୟାବ",
          description: "ଭର୍ଚୁଆଲ୍ ପରୀକ୍ଷଣ କରନ୍ତୁ"
        },
        historyHeroes: {
          title: "ଇତିହାସ ହିରୋ",
          description: "ସମୟ ଯାତ୍ରା ଶିଖିବା ଦୁଃସାହସିକ କାର୍ଯ୍ୟ"
        },
        grammarGalaxy: {
          title: "ବ୍ୟାକରଣ ଗାଲାକ୍ସି",
          description: "ମହାକାଶରେ ଭାଷା କୌଶଳରେ ଦକ୍ଷତା ହାସଲ କରନ୍ତୁ"
        }
      }
    },
    footer: {
      mission: "ଭାରତର ଗ୍ରାମାଞ୍ଚଳର ଛାତ୍ରଛାତ୍ରୀମାନଙ୍କୁ ଗେମିଫାଇଡ୍ ଲର୍ନିଂ ଅନୁଭବ ସହିତ ସଶକ୍ତ କରିବା ଯାହା ଶିକ୍ଷାକୁ ସୁଗମ, ଆକର୍ଷଣୀୟ ଏବଂ ପ୍ରଭାବଶାଳୀ କରିଥାଏ।",
      quickLinks: "ଦ୍ରୁତ ଲିଙ୍କ",
      support: "ସହାୟତା",
      links: {
        home: "ଘର",
        aboutUs: "ଆମ ବିଷୟରେ",
        games: "ଗେମ୍ସ",
        studyMaterials: "ଅଧ୍ୟୟନ ସାମଗ୍ରୀ",
        leaderboard: "ଲିଡରବୋର୍ଡ",
        contact: "ଯୋଗାଯୋଗ",
        helpCenter: "ସହାୟତା କେନ୍ଦ୍ର",
        privacyPolicy: "ଗୋପନୀୟତା ନୀତି",
        termsOfService: "ସେବା ସର୍ତ୍ତାବଳୀ",
        parentGuide: "ପିତାମାତା ଗାଇଡ୍",
        teacherResources: "ଶିକ୍ଷକ ସମ୍ବଳ"
      },
      copyright: "© 2024 ଜ୍ଞାନ ସାଗର. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
      motto: "\"ପ୍ରତ୍ୟେକ ଶିଶୁ ଶିଖିବାର ଆନନ୍ଦର ଅଧିକାରୀ\" ✨"
    }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showSignIn, setShowSignIn] = useState(false);

  const t = translations[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setLanguageDropdown(false);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleBackToHome = () => {
    setShowSignIn(false);
  };

  if (showSignIn) {
    return <SignInPage onBack={handleBackToHome} currentLanguage={currentLanguage} />;
  }

  const floatingElements = [
    { icon: BookOpen, delay: '0s', duration: '6s' },
    { icon: Star, delay: '1s', duration: '4s' },
    { icon: Trophy, delay: '2s', duration: '5s' },
    { icon: Target, delay: '3s', duration: '7s' },
  ];

  const [currentAnimatedText, setCurrentAnimatedText] = useState(0);
  const features = [
    {
      icon: Play,
      title: t.features.playToLearn.title,
      description: t.features.playToLearn.description,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Trophy,
      title: t.features.earnRewards.title,
      description: t.features.earnRewards.description,
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: BookOpen,
      title: t.features.studyMaterials.title,
      description: t.features.studyMaterials.description,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const games = [
    {
      title: t.games.gameList.mathQuest.title,
      description: t.games.gameList.mathQuest.description,
      image: "🧮",
      difficulty: t.games.difficulty.easy
    },
    {
      title: t.games.gameList.scienceLab.title,
      description: t.games.gameList.scienceLab.description,
      image: "🔬",
      difficulty: t.games.difficulty.medium
    },
    {
      title: t.games.gameList.historyHeroes.title,
      description: t.games.gameList.historyHeroes.description,
      image: "🏛️",
      difficulty: t.games.difficulty.hard
    },
    {
      title: t.games.gameList.grammarGalaxy.title,
      description: t.games.gameList.grammarGalaxy.description,
      image: "🚀",
      difficulty: t.games.difficulty.medium
    }
  ];

  // Animated text rotation
  useEffect(() => {
    const animatedTexts = Object.values(t.hero.animatedText);
    const interval = setInterval(() => {
      setCurrentAnimatedText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.animatedText]);

  const animatedTexts = Object.values(t.hero.animatedText);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <element.icon className="w-8 h-8 text-[#778DA9]" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center animate-pulse">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
                Gyaan Sagar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
             
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                  className="flex items-center space-x-1 text-[#E0E1DD] hover:text-[#778DA9] transition-colors duration-300 font-medium"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {languageDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-[#1B263B] rounded-lg shadow-xl py-2 min-w-[120px]">
                    <button onClick={() => handleLanguageChange('en')} className="block w-full text-left px-4 py-2 hover:bg-[#415A77] transition-colors">English</button>
                    <button onClick={() => handleLanguageChange('hi')} className="block w-full text-left px-4 py-2 hover:bg-[#415A77] transition-colors">हिंदी</button>
                    <button onClick={() => handleLanguageChange('or')} className="block w-full text-left px-4 py-2 hover:bg-[#415A77] transition-colors">ଓଡ଼ିଆ</button>
                  </div>
                )}
              </div>

              {/* Sign In Button */}
              <button 
                onClick={handleSignInClick}
                className="relative px-8 py-3 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#778DA9]/25 overflow-hidden group"
              >
                <span className="relative z-10">{t.nav.signIn}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#778DA9] to-[#415A77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#E0E1DD] hover:text-[#778DA9] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#1B263B] rounded-lg shadow-xl mt-2 py-4 px-4 space-y-4">
              <a href="#" className="block text-[#E0E1DD] hover:text-[#778DA9] transition-colors font-medium">{t.nav.home}</a>
              <a href="#" className="block text-[#E0E1DD] hover:text-[#778DA9] transition-colors font-medium">{t.nav.about}</a>
              <a href="#" className="block text-[#E0E1DD] hover:text-[#778DA9] transition-colors font-medium">{t.nav.contact}</a>
              <div className="space-y-2">
                <div className="text-[#778DA9] text-sm font-medium">Language / भाषा / ଭାଷା</div>
                <div className="flex space-x-2">
                  <button onClick={() => handleLanguageChange('en')} className={`px-3 py-1 rounded-full text-xs ${currentLanguage === 'en' ? 'bg-[#415A77] text-white' : 'bg-[#1B263B] text-[#778DA9]'}`}>EN</button>
                  <button onClick={() => handleLanguageChange('hi')} className={`px-3 py-1 rounded-full text-xs ${currentLanguage === 'hi' ? 'bg-[#415A77] text-white' : 'bg-[#1B263B] text-[#778DA9]'}`}>हिं</button>
                  <button onClick={() => handleLanguageChange('or')} className={`px-3 py-1 rounded-full text-xs ${currentLanguage === 'or' ? 'bg-[#415A77] text-white' : 'bg-[#1B263B] text-[#778DA9]'}`}>ଓଡ଼ି</button>
                </div>
              </div>
              <button 
                onClick={handleSignInClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full font-semibold text-white"
              >
                {t.nav.signIn}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            {/* Animated Mascot */}
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full animate-spin-slow opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] rounded-full flex items-center justify-center text-6xl animate-bounce">
                🤖
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#778DA9] via-[#E0E1DD] to-[#778DA9] bg-clip-text text-transparent animate-pulse">
              {t.hero.title1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#E0E1DD] to-[#778DA9] bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#778DA9] mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <button
    onClick={handleSignInClick} // 👈 Added Sign In handler
    className="group relative px-10 py-4 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full font-bold text-lg text-white transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-[#778DA9]/25 overflow-hidden"
  >
    <span className="relative z-10 flex items-center">
      {t.hero.startLearning}{" "}
      <Play className="ml-2 w-5 h-5 group-hover:animate-bounce" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-[#778DA9] to-[#415A77] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</div>


          {/* Animated Text Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative h-20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#778DA9] animate-pulse transition-all duration-1000">
                    {animatedTexts[currentAnimatedText]}
                  </div>
                </div>
              </div>
              
              {/* Floating Learning Icons */}
              <div className="flex justify-center space-x-8 mt-8">
                {[BookOpen, Star, Trophy, Target].map((Icon, index) => (
                  <div key={index} className="animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon className="w-8 h-8 text-[#778DA9] hover:text-[#E0E1DD] transition-colors duration-300 cursor-pointer transform hover:scale-125" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1B263B] to-[#415A77] rounded-2xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#778DA9]/20 overflow-hidden"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#E0E1DD] mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-[#778DA9] leading-relaxed group-hover:text-[#E0E1DD] transition-colors">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#778DA9]/10 to-[#415A77]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1B263B]/50 to-[#415A77]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
              {t.games.title}
            </h2>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              {t.games.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1B263B] to-[#415A77] rounded-2xl p-6 transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-[#778DA9]/25 cursor-pointer overflow-hidden"
              >
                {/* Game Image/Emoji */}
                <div className="text-6xl mb-4 text-center group-hover:scale-125 transition-transform duration-300">
                  {game.image}
                </div>
                
                <h3 className="text-xl font-bold text-[#E0E1DD] mb-2 text-center group-hover:text-white transition-colors">
                  {game.title}
                </h3>
                
                <p className="text-[#778DA9] text-center mb-4 group-hover:text-[#E0E1DD] transition-colors text-sm">
                  {game.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    game.difficulty === t.games.difficulty.easy ? 'bg-green-500/20 text-green-400' :
                    game.difficulty === t.games.difficulty.medium ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {game.difficulty}
                  </span>
                  <Play className="w-5 h-5 text-[#778DA9] group-hover:text-white group-hover:scale-125 transition-all duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#778DA9]/10 to-[#415A77]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-2xl">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group px-10 py-4 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full font-bold text-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              {t.games.viewAll}
              <Award className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Mission */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center animate-pulse">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
                  GyaanSagar
                </span>
              </div>
              <p className="text-[#778DA9] leading-relaxed mb-6 max-w-md">
                {t.footer.mission}
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-[#1B263B] rounded-full flex items-center justify-center text-[#778DA9] hover:text-white hover:bg-[#415A77] transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-[#E0E1DD] mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                {[
                  t.footer.links.home,
                  t.footer.links.aboutUs,
                  t.footer.links.games,
                  t.footer.links.studyMaterials,
                  t.footer.links.leaderboard,
                  t.footer.links.contact
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#778DA9] hover:text-[#E0E1DD] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold text-[#E0E1DD] mb-4">{t.footer.support}</h3>
              <ul className="space-y-2">
                {[
                  t.footer.links.helpCenter,
                  t.footer.links.privacyPolicy,
                  t.footer.links.termsOfService,
                  t.footer.links.parentGuide,
                  t.footer.links.teacherResources
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#778DA9] hover:text-[#E0E1DD] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1B263B] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#778DA9] mb-4 md:mb-0">
                {t.footer.copyright}
              </p>
              <div className="text-center md:text-right">
                <p className="text-[#E0E1DD] font-medium text-lg bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
                  {t.footer.motto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;