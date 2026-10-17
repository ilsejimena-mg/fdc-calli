export const metadata = { title: 'Conoce al equipo' }

const TEAM = [
  {
    name: 'Ricardo Torres (él)', role: 'Presidencia', photo: '/images/equipo-ricardo-coyotzin.jpg', focus: 'center 20%',
    bio: 'Fundador y presidente de Fuera del Clóset A.C. Licenciado en Comunicación; Especialista en Género, Violencia y Políticas Públicas, actualmente estudio la Maestría en Estudios para la Paz y el Desarrollo por la Universidad Autónoma del Estado de México. Soy conductor de UniQueer, programa de radio transmitido por el 99.7 FM. Impulsor de iniciativas de ley en el Edomex, como la prohibición de ECOSIGS, matrimonio igualitario, derogación del "peligro de contagio" y el reconocimiento de las identidades no binarias.',
  },
  {
    name: 'Ernesto Montes de Oca (él/ella/elle)', role: 'Secretaría', photo: '/images/equipo-mario-montes-de-oca.jpg', focus: 'center 15%',
    bio: 'Soy Licenciado en Comunicación, especialista en Género, Violencia y Políticas Públicas y maestrante en Género, Sociedad y Políticas Públicas por la Universidad Autónoma del Estado de México. Experiencia en acompañamiento a víctimas de discriminación y violencia por orientación sexual, expresión e identidad de género y VIH, así como en labores de comunicación social, periodismo e incidencia política, entre ellas, la exigencia para que existiera el presupuesto etiquetado a favor de la población LGBTTTIQANB+ en el Estado de México.',
  },
  {
    name: 'Dany Contreras Fuentes (ella/elle/él)', role: 'Coordinación de Calli', photo: '/images/equipo-dany-contreras.jpg', focus: 'center 25%',
    bio: 'Soy una persona No Binaria que estudió Administración en Negocios Internacionales y amplié mi formación a través de la licenciatura en Ciencias Políticas y Administración Pública. Me desempeño como auxiliar en programas de investigación académica. Cuento con nueve años de experiencia consolidada y labor social sobre los derechos LGBTTTIQANB+, además de brindar atención personal en el centro comunitario Calli.',
  },
  {
    name: 'Iván Torres Barrera (él)', role: 'Coordinación de Prevención y Atención a VIH e ITS', photo: '/images/equipo-ivan.jpg', focus: 'center 20%',
    bio: 'Soy Licenciado en Sociología, líder del proyecto de "Ampliación de PrEP en Toluca" en cooperación con la Embajada de Francia en México; Gestión de consejería y tamizaje en VIH, Sífilis y VHC; Vinculación de casos a PrEP, PEP y TAR; Planificación de jornadas comunitarias en espacios públicos y espacios clave; Capacitaciones de bioética a personal de salud del estado de México; y colaboración con instituciones públicas de salud para fortalecer las actividades y servicios de atención.',
  },
  {
    name: 'César M.G. (él)', role: 'Coordinación de Atención a la Salud Mental', photo: '/images/equipo-cesar.jpg', focus: 'center 15%',
    bio: 'Soy Licenciado en Psicología y Maestro en Educación, actualmente estudia la Licenciatura en Educación Primaria en la ByBENMAC del estado de Zacatecas. Con amplia experiencia en docencia, orientación educativa y acompañamiento psicológico. Activista por los derechos humanos de la comunidad LGBTTTIQANB+, con enfoque en perspectiva de género, diversidad e inclusión.',
  },
  {
    name: 'Edson Morales (él)', role: 'Coordinación de Voluntariado, Servicio Social y Prácticas Profesionales', photo: '/images/equipo-edson.jpg', focus: 'center 20%',
    bio: 'Soy Psicólogo, especialista y maestrante en Género, Sociedad y Políticas Públicas (UAEMéx), con certificaciones en derechos humanos y atención a mujeres víctimas de violencia de género. Mi labor profesional se enfoca en el trabajo con juventudes LGBTTTIQANB+, sexualidad, masculinidades y prevención de violencia, con experiencia en intervención en crisis.',
  },
  {
    name: 'Terry Merlos (ella)', role: 'Coordinación de Derechos Humanos, Género, Desarrollo y Cultura de Paz', photo: '/images/equipo-tere-merlos.jpg', focus: 'center 15%',
    bio: 'Soy Licenciada en Pedagogía, Maestra en Educación y Directora Escolar de una Primaria pública. También promotora de la marcha Sáficolencha de Toluca y activista por los derechos de las mujeres de la diversidad.',
  },
  {
    name: 'Mayahuel León Ortiz (ella)', role: 'Coordinación de Capacitación y Vinculación', photo: '/images/equipo-maya.jpg', focus: 'center 25%',
    bio: 'Soy Licenciada en Trabajo Social y especialista en Derechos Humanos. Con experiencia en los temas de igualdad de género, violencia, diversidad sexogenérica y experiencia con el trato directo, cálido y de calidez con las personas.',
  },
  {
    name: 'Tania Vianey Cortez Huerta (ella/él)', role: 'Coordinación de Difusión Cultural', photo: '/images/equipo-tania.jpg', focus: 'center 20%',
    bio: 'Soy estudiante de Ciencias Políticas y Administración Pública, con experiencia en proyectos de derechos humanos, inclusión y participación social. Colaboro con organizaciones de la sociedad civil en la defensa de los derechos de las personas LGBTTTIQANB+ y de las personas con discapacidad. Interesada en contribuir a la construcción de una sociedad más justa, igualitaria, inclusiva y accesible para todes.',
  },
  {
    name: 'Alex Estrada (ella/elle)', role: 'Voluntariado', photo: '/images/equipo-alex-estrada.jpg', focus: 'center 25%',
    bio: 'Soy activista y estudiante de Sociología, con enfoque en estudios de género y derechos humanos de la población LGBTTTIQANB+.',
  },
  {
    name: 'Alexei León (él)', role: 'Voluntariado', photo: '/images/equipo-alexei-leon.jpg', focus: 'center 25%',
    bio: 'Soy un hombre Transgénero, estudiante de Psicología, interesado en el desarrollo humano, la salud mental y el bienestar de la población LGBTTTIQANB+. Me caracterizo por ser una persona sensible, creativo y apasionado, con interés por la música, el baile y la escritura. Actualmente, busco fortalecer mis conocimientos y habilidades profesionales, manteniendo mi compromiso con el aprendizaje y mi crecimiento personal.',
  },
  {
    name: 'Ana Leslye Jimenez Bautista (ella)', role: 'Voluntariado', photo: '/images/equipo-ana-lesly.jpg', focus: 'center 20%',
    bio: 'Soy estudiante de Actuaría, con interés en el análisis de datos y la aplicación de herramientas cuantitativas. Actualmente me desempeño en el área de Business Intelligence, enfocándome en el análisis e interpretación de información para apoyar la toma de decisiones.',
  },
  {
    name: 'Arlette Yanin F. Castaño (ella)', role: 'Voluntariado', photo: '/images/equipo-arlette-yanin.jpg', focus: 'center 20%',
    bio: 'Soy médica general y voluntaria en salud comunitaria. Me interesa la salud sexual, la prevención del VIH y otras ITS, y la promoción de una atención inclusiva y libre de estigma.',
  },
  {
    name: 'Damian Peach (él/ella/elle)', role: 'Voluntariado', photo: '/images/equipo-damian.jpg', focus: 'center 20%',
    bio: 'Soy creador de contenido y activista por los derechos LGBTTTIQANB+. Comparto información sobre diversidad y temas sociales, además de participar en la orientación comunitaria sobre VIH y prevención mediante PrEP, promoviendo la información, la inclusión y la lucha contra el estigma y la discriminación.',
  },
  {
    name: 'Darina Robles Robles (ella)', role: 'Voluntariado', photo: '/images/equipo-darina-robles.jpg', focus: 'center 25%',
    bio: 'Soy estudiante de la Licenciatura en Comunicación por la UAEMéx y Técnica en Contabilidad. Mi experiencia profesional abarca la locución, la escritura de guiones, la producción audiovisual y la investigación científica social, con un enfoque en netnografía, violencia digital y narrativas sociales. En medios, destaco como creadora y voz del segmento cultural "Dato con Relato" en Radio Miled Toluca. Además, mantengo un firme compromiso ético y social: realizo labor comunitaria en el Centro Comunitario Calli, participo en la promoción de la lectura, soy vegana y activista por los derechos de los seres sintientes.',
  },
  {
    name: 'Fernando Aguilar (él)', role: 'Voluntariado', photo: '/images/equipo-fernando-aguilar.jpg', focus: 'center 20%',
    bio: 'Soy Licenciado en Criminología, activista trans, redactor y ponente en derechos humanos. Mi labor se enfoca en la promoción de los derechos de las personas LGBTTTIQANB+ y la visibilización de las transmasculinidades. He colaborado con la Secretaría de las Mujeres del Estado de México, la Comisión de Derechos Humanos del Estado de México y diversas organizaciones de la sociedad civil, impulsando temas de inclusión y no discriminación.',
  },
  {
    name: 'Jorge Ranferi García Vargas (él)', role: 'Voluntariado', photo: '/images/equipo-jorge-ranferi.jpg', focus: 'center 20%',
    bio: 'Soy Licenciado en psicología con experiencia en el ámbito clínico y temas de diversidad, además de artista escénico y performativo.',
  },
  {
    name: 'Lizzy Ortega (ella/elle)', role: 'Voluntariado', photo: '/images/equipo-lizzy.jpg', focus: 'center 20%',
    bio: 'Activista, pansexual, batukera antipatriarcal y futura licenciada en sociología. Me gustan los Ternurines, One Direction y Taylor Swift.',
  },
  {
    name: 'Miriam Yazmín Erazo García (ella)', role: 'Voluntariado', photo: '/images/equipo-miri.jpg', focus: 'center 25%',
    bio: 'Soy psicóloga desde hace 8 años. Mi mayor motivación es que mis pacientes encuentren el equilibrio emocional y la paz mental que necesitan para sentirse ellos mismos siempre.',
  },
  {
    name: 'Noé Mejía (él)', role: 'Voluntariado', photo: '/images/equipo-noe-jesus.jpg', focus: 'center 25%',
    bio: 'Soy licenciado en Derecho con especialidades en Responsabilidades Administrativas y Derechos Humanos. Me he desempeñado en el ámbito de la transparencia, rendición de cuentas y protección de datos personales. Uno de mis intereses es acercar con un lenguaje ciudadano y sencillo las leyes así como impulsar la difusión del reconocimiento de los derechos LGBTTTIQANB+ que hemos alcanzado así como los que aún nos faltan.',
  },
  {
    name: 'Ónix Seven (elle/él)', role: 'Voluntariado', photo: '/images/equipo-onix.jpg', focus: 'center 20%',
    bio: 'Soy fotografe, artista visual con formación en Ciencias Políticas y Administración Pública por la UAEMéx, desde donde abordo una comprensión profunda de las dinámicas humanas, el contexto social y las realidades periféricas. Mi labor se centra en la narrativa visual y la visibilización de las disidencias.',
  },
  {
    name: 'Viktor Mikael Cuadros González (él)', role: 'Voluntariado', photo: '/images/equipo-vik-mikael.jpg', focus: 'center 25%',
    bio: 'Soy Licenciado en Psicología por la universidad Autónoma del Estado de México, curso un diplomado en análisis funcional de la conducta en el instituto IETPC, así como un diplomado enfocado al acompañamiento de víctimas de violencia sexual, dedicado a la atención de personas con ansiedad y acompañamiento a víctimas de violencia.',
  },
]

const FEATURED = TEAM.filter(member => member.bio || member.featured)
const REST = TEAM.filter(member => !member.bio && !member.featured)

export default function EquipoPage() {
  return (
    <main className="container">
      <div className="about-page">
        <h1 style={{ color: 'var(--color-accent)' }}>Conoce al equipo</h1>

        {FEATURED.map(({ name, role, photo, focus, bio }, i) => {
          const isFirstVolunteer = role === 'Voluntariado' && (i === 0 || FEATURED[i - 1].role !== 'Voluntariado')

          return (
          <div key={name}>
            {isFirstVolunteer && (
              <p style={{
                fontSize: '2.25rem', fontWeight: 900, color: 'var(--color-accent)', textAlign: 'center',
                margin: '0 0 2.5rem', textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>
                Voluntariado
              </p>
            )}
            {role && role !== 'Voluntariado' && (
              <p style={{
                fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-accent)', textAlign: 'center',
                maxWidth: 900, margin: '0 auto 1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>
                {role}
              </p>
            )}
            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: '2rem',
                maxWidth: 900, margin: '0 auto 3rem', alignItems: 'flex-start',
              }}
            >
            <div style={{ width: 220, flexShrink: 0, textAlign: 'center', marginLeft: 'auto', marginRight: bio ? 0 : 'auto' }}>
              <img
                src={photo}
                alt={name}
                style={{
                  width: 180, height: 180, borderRadius: '50%', objectFit: 'cover',
                  objectPosition: focus || 'center',
                  border: '1px solid var(--color-border)', marginBottom: '1rem',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block',
                }}
              />
              <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text)', margin: 0 }}>{name}</p>
            </div>

            {bio && (
              <p style={{
                flex: '1 1 320px', textAlign: 'justify', color: 'var(--color-text-muted)',
                lineHeight: 1.75, marginTop: '0.5rem',
              }}>
                {bio}
              </p>
            )}
            </div>
          </div>
          )
        })}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {REST.map(({ name, role, photo, focus }) => (
            <div key={name} style={{ width: 200, textAlign: 'center' }}>
              <img
                src={photo}
                alt={name}
                style={{
                  width: 160, height: 160, borderRadius: '50%', objectFit: 'cover',
                  objectPosition: focus || 'center',
                  border: '1px solid var(--color-border)', marginBottom: '0.9rem',
                  marginLeft: 'auto', marginRight: 'auto', display: 'block',
                }}
              />
              <p style={{ fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>{name}</p>
              {role && (
                <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
