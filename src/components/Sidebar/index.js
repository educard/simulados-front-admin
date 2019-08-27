import React from 'react'
import cn from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { isSidebarOpen } from 'store/ui'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Link from 'components/Link'

import './sidebar.scss'

const routes = [
  {
    icon: '📖',
    title: 'Lista de Questões',
    path: '/',
  },
  {
    icon: '📖',
    title: 'Questões Pendentes',
    path: '/pendingQuestions',
  },
  {
    icon: '📝',
    title: 'Nova questão',
    path: '/nova',
  },
  {
    icon: '👤',
    title: 'Meu perfil',
    path: '/perfil',
  },
]
const userLoggedOff = () => ({})

const Sidebar = ({ path = '/', open, logoff }) => (
  <aside className={cn('sidebar', open && 'sidebar--open')}>
    <section className="sidebar__inner">
      <div className="sidebar-item">
        <Logo />
      </div>
      <nav className="sidebar__navigation">
        {routes.map(route => (
          <Link
            key={route.title}
            to={route.path}
            className={cn(
              'sidebar-item',
              path === route.path && 'sidebar-item--active',
              'clickable',
            )}
          >
            {route.icon} {route.title}
          </Link>
        ))}
      </nav>
      <footer className="sidebar-item sidebar__footer">
        <span>usuário</span>
        <Button size="sm" ghost onClick={logoff}>
          Sair
        </Button>
      </footer>
    </section>
  </aside>
)

export default connect(
  state => ({
    path: state.router.location.pathname,
    open: isSidebarOpen(state),
  }),
  dispatch => bindActionCreators({ logoff: userLoggedOff }, dispatch),
)(Sidebar)
