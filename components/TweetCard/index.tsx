import { memo } from "react";
import { lighten } from "polished";
import LinkNext from 'next/link'

import { ButtonIcon, Avatar, Icons } from "components";

import { Flex } from "styles/Flex";

import * as Styles from './styles'
import { useTheme } from "hooks";

interface TweetCard {
  onClick?: () => void;
  username: string;
  avatar_url: string;
  perfil_link: string;
  created_at: string;
  nick: {
    label: string;
    href: string
  };
}
function BaseTweetCard ({ created_at, nick, username, avatar_url, onClick, perfil_link }: TweetCard) {
  const { colors } = useTheme()

  return (
    <Styles.Article onClick={onClick}>
      <Styles.Left onClick={event => event.stopPropagation()}>
        <Avatar size={2.7} src={avatar_url} />
        <Styles.Arrow></Styles.Arrow>
      </Styles.Left>
      <Flex flex={1} column>
          <Styles.Header>
            <Flex fullWidth alignItems="center" gap={.5} flex={1}>
              <LinkNext  href={perfil_link}>
                <Styles.Username>
                    {username}
                </Styles.Username>
              </LinkNext>
              <Styles.Ref href={nick?.href}><a>{nick?.label}</a></Styles.Ref>
              <Styles.CreateAt> · {created_at}</Styles.CreateAt>
            </Flex>
            <ButtonIcon 
              hoverActiveColor={lighten(.4, colors.primary)} 
              iconHoverActiveColor={colors.primary}
              size={2} 
              name="horizontalDoots"
            />
          </Styles.Header>
          <Styles.Body></Styles.Body>
          <Styles.Footer>
            <ButtonIcon 
              hoverActiveColor={lighten(.4, colors.primary)} 
              iconHoverActiveColor={colors.primary} 
              size={2} 
              name="dialog"
            />
            <ButtonIcon 
              hoverActiveColor="rgba(0, 186, 124, 0.1)"
              iconHoverActiveColor="rgba(0, 186, 124, 1)"
              size={2} 
              name="retweet"
            />
            <ButtonIcon 
              hoverActiveColor="rgba(249, 24, 128, .1)"
              iconHoverActiveColor="rgba(249, 24, 128)"
              size={2} 
              name="heart"/>
            <ButtonIcon 
              hoverActiveColor={lighten(.4, colors.primary)} 
              iconHoverActiveColor={colors.primary}
              size={2} 
              name="share"
            />
          </Styles.Footer>
        </Flex>
    </Styles.Article>
  )
}

export const TweetCard = memo(BaseTweetCard)