import { memo } from "react";
import { useRouter } from 'next/router';
import LinkNext from 'next/link'

import { Icons } from "components";

import { routePaths } from 'constants/routes';

import { useTheme } from 'hooks';

import * as Styles from './styles'
import { Flex } from "styles/Flex";


function BaseNavigation () {
  const router = useRouter();
  const { colors } = useTheme()

  return (
    <Styles.Container>
      <Styles.Content>
        <nav>
          <Styles.List>
            <Styles.Item isActive={router.pathname === routePaths.home}>
              <LinkNext href={routePaths.home}>
                <Styles.Link>
                  <Icons name="home" />
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.home}>
                <Styles.Link >
                  <Icons name="home" />
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.home}>
                <Styles.Link>
                  <Icons name="home" />
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.home}>
                <Styles.Link >
                  <Icons name="home" />
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
          </Styles.List>
        </nav>
      </Styles.Content>

    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)