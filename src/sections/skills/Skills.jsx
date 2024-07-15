import { skillsData } from './skillsData'

const Skills = () => {
  return (
    <div className='w-4/5 self-center border-blue-700 flex gap-3 flex-wrap'>
      {skillsData.skills.icons.map(function (skills, i) {
        return (
          <li className='mx-3 list-none' key={i}>
            <span>
              <div className='text-center'>
                <i className={skills.class} style={{ fontSize: '400%' }}>
                  <p className='text-center' style={{ fontSize: '30%', marginTop: '4px' }}>
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        )
      })}
    </div>
  )
}

export default Skills
