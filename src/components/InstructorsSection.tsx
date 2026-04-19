const InstructorsSection = () => {
  const instructors = [
    {
      name: "Rodrygo Murari",
      title: "Fundador e Professor",
      description: "Com mais de 5 MIL horas de atendimentos somados em Setting Terapêutico, Cursos, Treinamentos e Mentorias. Seu propósito é levar uma \"Psicanálise Descomplicada\", Honrando os Princípios e gerando Mudanças Breves na vida dos alunos iDM.",
      specialty: "Especialista em Metafísica comportamental e PNL SISTÊMICA, sua iniciativa de introduzir Módulos Integrativos dentro da Psicanálise, vem revolucionando e facilitando significativamente a vida de centenas e centenas de pessoas no Brasil e na Europa.",
      image: "/lovable-uploads/3a4fb99e-e1bb-4d83-843e-f5fe18a7a8b3.png"
    },
    {
      name: "Keila Reis",
      title: "Psicanalista e Doutora em Psicanálise",
      description: "Graduada em Economia, com pós-graduação em Psicologia Positiva e formação em Coaching. Atuou por 23 anos em grandes empresas antes de realizar sua transição de carreira para a Psicanálise. Professora e mentora em Psicanálise, é Doutora na área, integrando conhecimento técnico, desenvolvimento humano e escuta clínica em sua atuação.",
      specialty: "Dedica-se à formação e ao acompanhamento de pessoas que desejam aprofundar o autoconhecimento e transformar suas realidades por meio da compreensão da mente e das emoções.",
      image: "/lovable-uploads/keila-reis.png"
    }
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="text-foreground">Conheça seus </span>
          <span className="text-primary">Professores</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {instructor.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-accent mb-4 leading-tight">
                    {instructor.title}
                  </h4>

                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p className="text-sm">
                      {instructor.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground">
                      {instructor.specialty}
                    </p>
                  </div>

                  {/* Highlight badge */}
                  <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
                    <span className="text-sm font-medium text-primary">
                      Professor Especialista
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary/30 to-card/30 rounded-full border border-border/50">
            <span className="text-foreground font-medium">
              Aprenda com os melhores profissionais da área
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;