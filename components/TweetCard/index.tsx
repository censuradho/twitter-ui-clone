import { memo } from "react";

import { ButtonIcon, Avatar, Icons } from "components";

import { Flex } from "styles/Flex";

import * as Styles from './styles'
import { useTheme } from "hooks";
import { darken, lighten } from "polished";

interface TweetCard {
  username: string;
  avatar_url: string;
  created_at: string;
  nick: {
    label: string;
    href: string
  };
}
function BaseTweetCard ({ created_at, nick, username, avatar_url }: TweetCard) {
  const { colors } = useTheme()

  return (
    <Styles.Article>
      <Avatar size={2.7} src={avatar_url} />
      <Flex flex={1} column>
        <Styles.Header>
          <Flex fullWidth alignItems="center" gap={.5} flex={1}>
            <Styles.Username>{username}</Styles.Username>
            <Styles.Ref href={nick?.href}><a>{nick?.label}</a></Styles.Ref>
            <Styles.CreateAt>{created_at}</Styles.CreateAt>
          </Flex>
          <ButtonIcon size={2} name="horizontalDoots"/>
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
          <ButtonIcon size={2} name="heart"/>
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