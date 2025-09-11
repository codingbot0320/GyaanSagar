import React, { useState } from 'react';


import { 
  ArrowLeft, 
  BookOpen, 
  ChevronRight,
  ChevronLeft,
  Star,
  Trophy,
  Target,
  User,
  Calendar,
  GraduationCap,
  School,
  Heart
} from 'lucide-react';

const signInTranslations: {
  [key: string]: {
    backToHome: string;
    skip: string;
    continue: string;
    finish: string;
    progress: string;
    of: string;
    questions: {
      name: {
        title: string;
        placeholder: string;
        subtitle: string;
      };
      age: {
        title: string;
        placeholder: string;
        subtitle: string;
      };
      standard: {
        title: string;
        options: string[];
        subtitle: string;
      };
      school: {
        title: string;
        placeholder: string;
        subtitle: string;
      };
      interests: {
        title: string;
        options: string[];
        subtitle: string;
      };
    };
  };
} = {
  en: {
    backToHome: "Back to Home",
    skip: "Skip",
    continue: "Continue",
    finish: "Start Learning!",
    progress: "Question",
    of: "of",
    questions: {
      name: {
        title: "Looking good! What should I call you?",
        placeholder: "Enter your name",
        subtitle: "Don't worry, you can change this later"
      },
      age: {
        title: "How old are you?",
        placeholder: "Enter your age",
        subtitle: "This helps us customize your learning experience"
      },
      standard: {
        title: "Which class are you studying in?",
        options: ["6th Standard", "7th Standard", "8th Standard", "9th Standard", "10th Standard", "11th Standard", "12th Standard"],
        subtitle: "We'll show you content for your grade level"
      },
      school: {
        title: "What's the name of your school?",
        placeholder: "Enter your school name",
        subtitle: "Optional - helps us connect you with classmates"
      },
      interests: {
        title: "What subjects interest you the most?",
        options: ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Computer Science", "Arts", "Sports"],
        subtitle: "Select up to 3 subjects (you can change these later)"
      }
    }
  },
  hi: {
    backToHome: "होम पर वापस जाएं",
    skip: "छोड़ें",
    continue: "आगे बढ़ें",
    finish: "सीखना शुरू करें!",
    progress: "प्रश्न",
    of: "का",
    questions: {
      name: {
        title: "बहुत अच्छा! मैं आपको क्या कहूं?",
        placeholder: "अपना नाम दर्ज करें",
        subtitle: "चिंता न करें, आप इसे बाद में बदल सकते हैं"
      },
      age: {
        title: "आपकी उम्र कितनी है?",
        placeholder: "अपनी उम्र दर्ज करें",
        subtitle: "यह हमें आपके सीखने के अनुभव को अनुकूलित करने में मदद करता है"
      },
      standard: {
        title: "आप किस कक्षा में पढ़ रहे हैं?",
        options: ["6वीं कक्षा", "7वीं कक्षा", "8वीं कक्षा", "9वीं कक्षा", "10वीं कक्षा", "11वीं कक्षा", "12वीं कक्षा"],
        subtitle: "हम आपके ग्रेड स्तर के लिए सामग्री दिखाएंगे"
      },
      school: {
        title: "आपके स्कूल का नाम क्या है?",
        placeholder: "अपने स्कूल का नाम दर्ज करें",
        subtitle: "वैकल्पिक - आपको सहपाठियों से जोड़ने में मदद करता है"
      },
      interests: {
        title: "कौन से विषय आपको सबसे ज्यादा दिलचस्प लगते हैं?",
        options: ["गणित", "विज्ञान", "अंग्रेजी", "हिंदी", "सामाजिक अध्ययन", "कंप्यूटर विज्ञान", "कला", "खेल"],
        subtitle: "अधिकतम 3 विषय चुनें (आप इन्हें बाद में बदल सकते हैं)"
      }
    }
  },
  or: {
    backToHome: "ଘରକୁ ଫେରନ୍ତୁ",
    skip: "ଛାଡ଼ନ୍ତୁ",
    continue: "ଆଗକୁ ବଢ଼ନ୍ତୁ",
    finish: "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ!",
    progress: "ପ୍ରଶ୍ନ",
    of: "ର",
    questions: {
      name: {
        title: "ବହୁତ ଭଲ! ମୁଁ ଆପଣଙ୍କୁ କଣ କହିବି?",
        placeholder: "ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ",
        subtitle: "ଚିନ୍ତା କରନ୍ତୁ ନାହିଁ, ଆପଣ ଏହାକୁ ପରେ ବଦଳାଇ ପାରିବେ"
      },
      age: {
        title: "ଆପଣଙ୍କ ବୟସ କେତେ?",
        placeholder: "ଆପଣଙ୍କ ବୟସ ଲେଖନ୍ତୁ",
        subtitle: "ଏହା ଆମକୁ ଆପଣଙ୍କ ଶିଖିବା ଅନୁଭବକୁ ଅନୁକୂଳ କରିବାରେ ସାହାଯ୍ୟ କରେ"
      },
      standard: {
        title: "ଆପଣ କେଉଁ ଶ୍ରେଣୀରେ ପଢ଼ୁଛନ୍ତି?",
        options: ["୬ଷ୍ଠ ଶ୍ରେଣୀ", "୭ମ ଶ୍ରେଣୀ", "୮ମ ଶ୍ରେଣୀ", "୯ମ ଶ୍ରେଣୀ", "୧ୀମ ଶ୍ରେଣୀ", "୧୧ଶ ଶ୍ରେଣୀ", "୧୨ଶ ଶ୍ରେଣୀ"],
        subtitle: "ଆମେ ଆପଣଙ୍କ ଗ୍ରେଡ୍ ସ୍ତର ପାଇଁ ବିଷୟବସ୍ତୁ ଦେଖାଇବୁ"
      },
      school: {
        title: "ଆପଣଙ୍କ ବିଦ୍ୟାଳୟର ନାମ କଣ?",
        placeholder: "ଆପଣଙ୍କ ବିଦ୍ୟାଳୟର ନାମ ଲେଖନ୍ତୁ",
        subtitle: "ବୈକଳ୍ପିକ - ଆପଣଙ୍କୁ ସହପାଠୀମାନଙ୍କ ସହିତ ସଂଯୋଗ କରିବାରେ ସାହାଯ୍ୟ କରେ"
      },
      interests: {
        title: "କେଉଁ ବିଷୟଗୁଡ଼ିକ ଆପଣଙ୍କୁ ସବୁଠାରୁ ଆଗ୍ରହୀ କରେ?",
        options: ["ଗଣିତ", "ବିଜ୍ଞାନ", "ଇଂରାଜୀ", "ହିନ୍ଦୀ", "ସାମାଜିକ ଅଧ୍ୟୟନ", "କମ୍ପ୍ୟୁଟର ବିଜ୍ଞାନ", "କଳା", "ଖେଳ"],
        subtitle: "ସର୍ବାଧିକ ୩ଟି ବିଷୟ ବାଛନ୍ତୁ (ଆପଣ ଏଗୁଡ଼ିକୁ ପରେ ବଦଳାଇ ପାରିବେ)"
      }
    }
  }
};

interface SignInPageProps {
  onBack: () => void;
  currentLanguage: string;
}

const SignInPage: React.FC<SignInPageProps> = ({ onBack, currentLanguage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<{
    [key: string]: any;
    name: string;
    age: string;
    standard: string;
    school: string;
    interests: string[];
  }>({
    name: '',
    age: '',
    standard: '',
    school: '',
    interests: []
  });

  const t = signInTranslations[currentLanguage] || signInTranslations.en;
  const totalSteps = 5;

  const floatingElements = [
    { icon: BookOpen, delay: '0s', duration: '6s' },
    { icon: Star, delay: '1s', duration: '4s' },
    { icon: Trophy, delay: '2s', duration: '5s' },
    { icon: Target, delay: '3s', duration: '7s' },
  ];

  const questionIcons = [User, Calendar, GraduationCap, School, Heart];

  const handleInputChange = (value: string) => {
    const fields = ['name', 'age', 'standard', 'school', 'interests'];
    setFormData(prev => ({
      ...prev,
      [fields[currentStep]]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const currentInterests: string[] = prev.interests;
      const isSelected = currentInterests.includes(interest);
      if (isSelected) {
        return {
          ...prev,
          interests: currentInterests.filter((i: string) => i !== interest)
        };
      } else if (currentInterests.length < 3) {
        return {
          ...prev,
          interests: [...currentInterests, interest]
        };
      }
      return prev;
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form completion
      console.log('Registration completed:', formData);
      // Navigate to main dashboard
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const fields = ['name', 'age', 'standard', 'school', 'interests'];
    const currentField = fields[currentStep];
    if (currentStep === 3) return true; // School is optional
    if (currentStep === 4) return formData.interests.length > 0;
    return formData[currentField] && formData[currentField].toString().trim() !== '';
  };

  const renderQuestion = () => {
    const questions = t.questions;
    const IconComponent = questionIcons[currentStep];

    switch (currentStep) {
      case 0: // Name
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E0E1DD] mb-2">
                {questions.name.title}
              </h2>
              <p className="text-[#778DA9]">{questions.name.subtitle}</p>
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-6 py-4 bg-[#0D1B2A]/50 border-2 border-[#415A77]/50 rounded-xl text-white text-lg text-center placeholder-[#778DA9] focus:outline-none focus:ring-2 focus:ring-[#778DA9] focus:border-transparent transition-all duration-300"
              placeholder={questions.name.placeholder}
              autoFocus
            />
          </div>
        );

      case 1: // Age
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E0E1DD] mb-2">
                {questions.age.title}
              </h2>
              <p className="text-[#778DA9]">{questions.age.subtitle}</p>
            </div>
            <input
              type="number"
              min="10"
              max="25"
              value={formData.age}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-6 py-4 bg-[#0D1B2A]/50 border-2 border-[#415A77]/50 rounded-xl text-white text-lg text-center placeholder-[#778DA9] focus:outline-none focus:ring-2 focus:ring-[#778DA9] focus:border-transparent transition-all duration-300"
              placeholder={questions.age.placeholder}
              autoFocus
            />
          </div>
        );

      case 2: // Standard
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E0E1DD] mb-2">
                {questions.standard.title}
              </h2>
              <p className="text-[#778DA9]">{questions.standard.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions.standard.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleInputChange(option)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    formData.standard === option
                      ? 'bg-gradient-to-r from-[#415A77] to-[#778DA9] border-[#778DA9] text-white'
                      : 'bg-[#0D1B2A]/50 border-[#415A77]/50 text-[#778DA9] hover:border-[#778DA9] hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 3: // School
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E0E1DD] mb-2">
                {questions.school.title}
              </h2>
              <p className="text-[#778DA9]">{questions.school.subtitle}</p>
            </div>
            <input
              type="text"
              value={formData.school}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-6 py-4 bg-[#0D1B2A]/50 border-2 border-[#415A77]/50 rounded-xl text-white text-lg text-center placeholder-[#778DA9] focus:outline-none focus:ring-2 focus:ring-[#778DA9] focus:border-transparent transition-all duration-300"
              placeholder={questions.school.placeholder}
              autoFocus
            />
          </div>
        );

      case 4: // Interests
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#E0E1DD] mb-2">
                {questions.interests.title}
              </h2>
              <p className="text-[#778DA9]">{questions.interests.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {questions.interests.options.map((interest: string, index: number) => {
                const isSelected = (formData.interests as string[]).includes(interest);
                const canSelect = (formData.interests as string[]).length < 3 || isSelected;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleInterestToggle(interest)}
                    disabled={!canSelect}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#415A77] to-[#778DA9] border-[#778DA9] text-white'
                        : canSelect
                        ? 'bg-[#0D1B2A]/50 border-[#415A77]/50 text-[#778DA9] hover:border-[#778DA9] hover:text-white'
                        : 'bg-[#0D1B2A]/30 border-[#415A77]/30 text-[#778DA9]/50 cursor-not-allowed'
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
            <div className="text-center">
              <p className="text-sm text-[#778DA9]">
                Selected: {(formData.interests as string[]).length}/3
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-10"
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

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 bg-[#1B263B]/80 backdrop-blur-md rounded-full text-[#E0E1DD] hover:text-white hover:bg-[#415A77]/80 transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">{t.backToHome}</span>
        </button>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#778DA9]">
              {t.progress} {currentStep + 1} {t.of} {totalSteps}
            </span>
            <button
              onClick={handleNext}
              className="text-sm text-[#778DA9] hover:text-white transition-colors duration-300"
            >
              {t.skip}
            </button>
          </div>
          <div className="w-full bg-[#1B263B] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#415A77] to-[#778DA9] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
            Gyaan Sagar
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gradient-to-br from-[#1B263B]/80 to-[#415A77]/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#415A77]/30">
            {renderQuestion()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentStep === 0
                    ? 'text-[#778DA9]/50 cursor-not-allowed'
                    : 'text-[#778DA9] hover:text-white hover:bg-[#415A77]/50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  canProceed()
                    ? 'bg-gradient-to-r from-[#415A77] to-[#778DA9] text-white hover:shadow-xl hover:shadow-[#778DA9]/25'
                    : 'bg-[#415A77]/30 text-[#778DA9]/50 cursor-not-allowed'
                }`}
              >
                <span>{currentStep === totalSteps - 1 ? t.finish : t.continue}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;