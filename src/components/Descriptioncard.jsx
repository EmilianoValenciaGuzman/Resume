import csharp from '../assets/csharp.png';
import java from '../assets/java.webp';
import js from '../assets/js.png';
import aws from '../assets/aws.png';

const features = [
    { name: 'Phone', description: '999-599-5845' },
    { name: 'email', description: 'a20216410@alumnos.uady.mx' },
    { name: 'Location', description: 'México, Yucatán' },
    { name: 'GitHub', description: 'EmilianoValenciaGuzman' },
    { name: 'Linkedin', description: 'wwww.linkedin.com/in/emiliano-valencia' },
  ]
  
  export default function Descriptioncard() {
    return (
      <div className="bg-white" id="contact">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 custom-padding-top">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Emiliano Valencia Guzmán</h2>
            <p className="mt-4 text-gray-500">
            I am Emiliano Valencia, a student in Software Engineering at the Faculty of Mathematics 
            of the UADY with experience as a backend developer, SQL/NOSQL databases and desktop applications; 
            I am about to finish my university career and I am looking for a job opportunity to demonstrate my skills. 
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={js}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={java}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={csharp}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={aws}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  