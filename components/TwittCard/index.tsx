import { memo } from "react";

import { ButtonIcon, Avatar, Icons } from "components";

import { Flex } from "styles/Flex";

import * as Styles from './styles'

function BaseTwittCard () {
  return (
    <Styles.Article>
      <Avatar size={2.7} src="https://pbs.twimg.com/profile_images/1433095560878243844/X3LmnTXW_x96.jpg"/>
      <Flex flex={1} column>
        <Styles.Header>
          <Flex fullWidth alignItems="center" gap={.5} flex={1}>
            <Styles.Username>jOSY</Styles.Username>
            <Styles.Ref href="#"><a>@rebecamaia_P</a></Styles.Ref>
            <Styles.CreateAt >15 h</Styles.CreateAt>
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

export const TwittCard = memo(BaseTwittCard)