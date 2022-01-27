import { memo } from "react";

import { ButtonIcon, Avatar, Icons } from "components";

import { Flex } from "styles/Flex";

import * as Styles from './styles'

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
        <Styles.Footer>
          <button>
            <Icons size={18} name="dialog" />
          </button>
          <button>
            <Icons size={18} name="retweet" />
          </button>
          <button>
            <Icons size={18} name="heart" />
          </button>
          <button>
            <Icons size={18} name="share" />
          </button>
        </Styles.Footer>
      </Flex>

    </Styles.Article>
  )
}

export const TweetCard = memo(BaseTweetCard)