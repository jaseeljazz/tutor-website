
(function ($) {
  "use strict";

  window.DOHA_COURSES = {
    "primary-maths": {
      id: "primary-maths", title: "Primary Mathematics Foundations", short: "Build number confidence, reasoning and problem-solving skills through clear, guided lessons.", level: "Primary", category: "primary", subject: "Mathematics", curricula: "CBSE · Qatar National Curriculum", schedule: "Sun & Tue · 4:30 PM", duration: "8 live classes / month", price: 480, rating: "4.9", students: "96", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85", tutor: "Ms. Sara Ahmed", tutorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=85", outcomes: ["Stronger number sense and calculation accuracy", "Step-by-step word-problem strategies", "Weekly practice sheets with tutor feedback", "Monthly progress update for parents"], syllabus: ["Place value, operations and mental maths", "Fractions, decimals and percentages", "Measurement, geometry and data", "Applied reasoning and exam-style questions"]
    },
    "primary-english": {
      id: "primary-english", title: "Primary English Reading & Writing", short: "Improve reading comprehension, grammar, vocabulary and structured writing for school success.", level: "Primary", category: "primary", subject: "English", curricula: "CBSE · Qatar National Curriculum", schedule: "Mon & Wed · 4:30 PM", duration: "8 live classes / month", price: 450, rating: "4.8", students: "82", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85", tutor: "Ms. Lina Joseph", tutorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85", outcomes: ["More confident reading comprehension", "Clear sentence and paragraph structure", "Expanded academic vocabulary", "Regular spelling and grammar feedback"], syllabus: ["Reading for meaning and inference", "Grammar, punctuation and spelling", "Creative and factual writing", "Speaking and vocabulary development"]
    },
    "middle-science": {
      id: "middle-science", title: "Middle School Integrated Science", short: "Connect biology, chemistry and physics concepts with practical examples and guided revision.", level: "Middle School", category: "middle", subject: "Science", curricula: "IB MYP · CBSE", schedule: "Sat & Mon · 6:00 PM", duration: "8 live classes / month", price: 540, rating: "4.9", students: "113", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85", tutor: "Mr. Omar Khan", tutorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85", outcomes: ["Better understanding across three science disciplines", "Improved scientific vocabulary and explanation", "Confidence with diagrams and data interpretation", "Structured unit-test preparation"], syllabus: ["Cells, systems and ecosystems", "Matter, particles and reactions", "Forces, energy and electricity", "Scientific investigation and data skills"]
    },
    "middle-maths": {
      id: "middle-maths", title: "Middle School Mathematics", short: "Develop algebraic thinking, geometry skills and reliable problem-solving methods.", level: "Middle School", category: "middle", subject: "Mathematics", curricula: "IB MYP · CBSE", schedule: "Sun & Wed · 6:00 PM", duration: "8 live classes / month", price: 560, rating: "4.9", students: "128", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1200&q=85", tutor: "Mr. Faisal Rahman", tutorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85", outcomes: ["Strong foundations in algebra and geometry", "Better multi-step problem solving", "Improved accuracy under time limits", "Topic-by-topic revision tracking"], syllabus: ["Algebraic expressions and equations", "Ratio, proportion and percentages", "Geometry, area and volume", "Statistics, probability and modelling"]
    },
    "igcse-maths": {
      id: "igcse-maths", title: "IGCSE Mathematics Exam Mastery", short: "Targeted concept review, past-paper practice and exam technique for Core or Extended pathways.", level: "High School", category: "high", subject: "Mathematics", curricula: "Cambridge IGCSE · Edexcel", schedule: "Sun & Tue · 7:30 PM", duration: "8 live classes / month", price: 680, rating: "5.0", students: "147", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85", tutor: "Dr. Adeel Mahmood", tutorImage: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=85", outcomes: ["Complete coverage of Core or Extended objectives", "Timed past-paper practice every month", "Error analysis and personalised revision priorities", "Exam technique for maximum method marks"], syllabus: ["Number, algebra and functions", "Geometry, mensuration and trigonometry", "Statistics and probability", "Full-paper strategy and timed practice"]
    },
    "ib-physics": {
      id: "ib-physics", title: "IB Diploma Physics SL/HL", short: "Concept-driven Physics tuition with mathematical modelling, data analysis and internal assessment guidance.", level: "High School", category: "high", subject: "Physics", curricula: "IB Diploma SL · HL", schedule: "Mon & Thu · 7:30 PM", duration: "8 live classes / month", price: 760, rating: "4.9", students: "71", image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1200&q=85", tutor: "Mr. Daniel George", tutorImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=400&q=85", outcomes: ["Clear understanding of difficult Physics models", "Accurate mathematical working and units", "Data-based question and graph analysis", "IA planning guidance within academic-integrity rules"], syllabus: ["Mechanics, waves and thermal physics", "Electricity, fields and nuclear physics", "Data analysis and uncertainty", "SL/HL exam-question strategy"]
    },
    "a-level-chemistry": {
      id: "a-level-chemistry", title: "A-Level Chemistry Intensive", short: "Master physical, inorganic and organic chemistry through structured explanations and exam application.", level: "High School", category: "high", subject: "Chemistry", curricula: "Cambridge · Edexcel A-Level", schedule: "Sat & Wed · 7:30 PM", duration: "8 live classes / month", price: 740, rating: "4.8", students: "63", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85", tutor: "Ms. Reem Nasser", tutorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85", outcomes: ["Connected understanding across chemistry topics", "Confident calculations and mechanism drawing", "Improved practical-analysis responses", "Regular exam-question feedback"], syllabus: ["Atomic structure, bonding and energetics", "Equilibria, kinetics and electrochemistry", "Organic reactions and mechanisms", "Analytical chemistry and exam practice"]
    },
    "sat-prep": {
      id: "sat-prep", title: "SAT Maths & English Preparation", short: "A structured preparation programme covering test strategy, timed practice and targeted weak-area support.", level: "Test Prep", category: "test", subject: "SAT Preparation", curricula: "Digital SAT", schedule: "Fri & Sat · 10:00 AM", duration: "8 live classes / month", price: 850, rating: "4.9", students: "58", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85", tutor: "Mr. Adam Thomas", tutorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=85", outcomes: ["Baseline diagnostic and target-score plan", "Digital SAT maths and reading strategies", "Timed section practice", "Performance tracking by question type"], syllabus: ["Algebra and advanced mathematics", "Problem solving and data analysis", "Reading, expression and grammar", "Full-length digital mock tests"]
    },
    "ielts-prep": {
      id: "ielts-prep", title: "IELTS Academic Preparation", short: "Build test-ready skills across Listening, Reading, Writing and Speaking with individual feedback.", level: "Test Prep", category: "test", subject: "IELTS", curricula: "IELTS Academic", schedule: "Fri & Sun · 5:00 PM", duration: "8 live classes / month", price: 720, rating: "4.8", students: "76", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=85", tutor: "Ms. Hannah Lee", tutorImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=85", outcomes: ["Band-focused preparation plan", "Detailed Writing Task 1 and 2 feedback", "Speaking practice with correction", "Timed Reading and Listening techniques"], syllabus: ["Listening question types", "Academic reading strategies", "Writing Task 1 and Task 2", "Speaking fluency and accuracy"]
    }
  };

  function money(value) {
    return "QAR " + Number(value || 0).toLocaleString("en-US");
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function selectedCourse() {
    return window.DOHA_COURSES[getParam("course")] || window.DOHA_COURSES["igcse-maths"];
  }

  window.DohaLearn = { money: money, getParam: getParam, selectedCourse: selectedCourse };

  function navbarState() {
    $("#siteNavbar").toggleClass("scrolled", $(window).scrollTop() > 20);
    $("#backToTop").toggleClass("show", $(window).scrollTop() > 450);
  }

  $(function () {
    if (window.AOS) {
      AOS.init({ duration: 720, easing: "ease-out-cubic", once: true, offset: 60, disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches });
    }

    navbarState();
    $(window).on("scroll", navbarState);
    $("#currentYear").text(new Date().getFullYear());
    $("#backToTop").on("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    $(".payment-option").on("click", function () {
      $(".payment-option").removeClass("active");
      $(this).addClass("active").find("input").prop("checked", true);
      const method = $(this).find("input").val();
      $("#cardFields").toggle(method === "Credit / Debit Card");
    });

    $("#newsletterForm").on("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector("input[type=email]");
      const message = $(this).find(".newsletter-message");
      if (!input.checkValidity()) {
        message.text("Enter a valid email address.").removeClass("text-success").addClass("text-warning");
        return;
      }
      message.text("Subscribed. Connect this form to your email platform for live use.").removeClass("text-warning").addClass("text-success");
      this.reset();
    });
  });
})(jQuery);
