import HomeIcon from 'assets/home.svg'
import { ButtonIcon } from 'components';
import { routePaths } from 'constants/routes';
import { useRouter } from 'next/router';

import { memo } from "react";

import * as Styles from './styles'


function BaseNavigation () {
  const router = useRouter();

  return (
    <Styles.Container>
      <nav>
        <Styles.List>
          <Styles.Item isActive={router.pathname === routePaths.home}>
            <Styles.Link href={routePaths.home}>
              <ButtonIcon name="home" />
            </Styles.Link>
          </Styles.Item>
          <Styles.Item isActive={router.pathname === routePaths.welcome}>
            <Styles.Link href={routePaths.welcome}>
              <ButtonIcon name="search" />
            </Styles.Link>
          </Styles.Item>
          <Styles.Item isActive={router.pathname === routePaths.welcome}>
            <Styles.Link href={routePaths.welcome}>
              <ButtonIcon name="notification" />
            </Styles.Link>
          </Styles.Item>
          <Styles.Item isActive={router.pathname === routePaths.welcome}>
            <Styles.Link href={routePaths.welcome}>
              <ButtonIcon name="message" />
            </Styles.Link>
          </Styles.Item>
        </Styles.List>
      </nav>
    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)