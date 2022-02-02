import { memo } from "react";
import { useRouter } from 'next/router';
import LinkNext from 'next/link'

import { Avatar, Button, ButtonIcon, ButtonRound, Icons } from "components";

import { routePaths } from 'constants/routes';

import { useTheme } from 'hooks';

import * as Styles from './styles'
import { Flex } from "styles/Flex";
import { useSelector } from "react-redux";
import { lighten } from "polished";


function BaseNavigation () {
  const router = useRouter();
  const user = useSelector(value => value.user)

  const { colors } = useTheme()

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.BreakPointView min="small" hidden>
          <ButtonIcon 
            hoverActiveColor={lighten(.4, colors.primary)} 
            iconHoverActiveColor={colors.primary}
            fill={colors.primary}
            name="logo" 
          />
        </Styles.BreakPointView>

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
            <Styles.Item max="small" hidden isActive={router.pathname === routePaths.home}>
              <LinkNext href={routePaths.home}>
                <Styles.Link>
                  <Styles.IconContainer>
                    <Icons name="hashtag" />
                  </Styles.IconContainer>
                  <span>Explorar</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item min="mediumn" isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="search" />
                  </Styles.IconContainer>
                  <span>Página inicial</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item  isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="notification" />
                  </Styles.IconContainer>
                  <span>Notificações</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item  isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="message" />
                  </Styles.IconContainer>
                  <span>Mensagens</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item max="small"  isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link>
                  <Styles.IconContainer>
                    <Icons name="mark" />
                  </Styles.IconContainer>
                  <span>Itens salvos</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item max="small" isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="list" />
                  </Styles.IconContainer>
                  <span>Listas</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item max="small" isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="perfil" />
                  </Styles.IconContainer>
                  <span>Perfil</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
            <Styles.Item max="small" isActive={router.pathname === routePaths.welcome}>
              <LinkNext href={routePaths.welcome}>
                <Styles.Link >
                  <Styles.IconContainer>
                    <Icons name="more" />
                  </Styles.IconContainer>
                  <span>Mais</span>
                </Styles.Link>
              </LinkNext>
            </Styles.Item>
          </Styles.List>
        </nav>
        <Flex flex={1} justifyContent="center" fullWidth >
          <Styles.BreakPointView max="small" min="mediumn">
            <ButtonIcon fill="#fff"  variant="primary" name="newTweet" />
          </Styles.BreakPointView>
          <Styles.BreakPointView max="mediumn" >
            <Button fullWidth>Tweetar</Button>
          </Styles.BreakPointView>
        </Flex>
        <Styles.BreakPointView min="small" hidden>
          <Flex gap={1} alignItems="center">
            <Styles.IconContainer>
              <Avatar src={user?.avatar_url} />
            </Styles.IconContainer>
            <Styles.BreakPointView max="mediumn" hidden>
              <Flex column>
                <Styles.Username>{user.username}</Styles.Username>
                <Styles.Nickname>{`@${user.nickname}`}</Styles.Nickname>
              </Flex>
            </Styles.BreakPointView>
          </Flex>
        </Styles.BreakPointView>

      </Styles.Content>

    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)