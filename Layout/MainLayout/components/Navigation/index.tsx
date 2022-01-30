import { memo } from "react";
import { useRouter } from 'next/router';
import LinkNext from 'next/link'

import { Avatar, ButtonRound, Icons } from "components";

import { routePaths } from 'constants/routes';

import { useTheme } from 'hooks';

import * as Styles from './styles'
import { Flex } from "styles/Flex";
import { useSelector } from "react-redux";


function BaseNavigation () {
  const router = useRouter();
  const user = useSelector(value => value.user)

  const { colors } = useTheme()

  return (
    <Styles.Container>
      <Styles.Content>
        <nav>
          <Styles.List>
            <Styles.Item isActive={router.pathname === routePaths.home}>
              <LinkNext href={routePaths.home}>
                <Styles.Link>
                  <Styles.IconContainer>
                    <Icons name="home" />
                  </Styles.IconContainer>
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="home" />
                  </Styles.IconContainer>
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link>
                  <Styles.IconContainer>
                    <Icons name="home" />
                  </Styles.IconContainer>
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="home" />
                  </Styles.IconContainer>
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
          </Styles.List>
        </nav>
        <Styles.IconContainer>
          <Avatar src={user?.avatar_url} />
        </Styles.IconContainer>
      </Styles.Content>

    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)