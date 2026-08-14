import { NavLink } from 'react-router-dom'
import '../../styles/SideLeftPanel.css'

const services = [
  {
    name: 'Mermaid',
    path: '/mermaid'
  },
  {
    name: 'CSV Service',
    path: '/csv'
  },
  {
    name: 'Excel Service',
    path: '/excel'
  },
  {
    name: 'String Service',
    path: '/string'
  }
]

export const SideLeftPanel = () => {
	return (
		<nav className="side-left-panel">
			{services.map((service) => (
			<NavLink
				key={service.path}
				to={service.path}
				className={({ isActive }) =>
					isActive
					? 'side-left-panel__button active'
					: 'side-left-panel__button'
				}
			>
		{service.name}</NavLink>))}
		</nav>
	)
}