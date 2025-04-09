import Close from '../../assets/close.svg?react';
/** @jsxImportSource @emotion/react */
import * as S from './intro.style';
import React from 'react';
import Divider from '../../assets/divider.svg?react'
import bgImage from '../../assets/backGround.svg';
import {AUTH_MESSAGES} from "../../constants/authConstants";
 import {INTRO_MESSAGES} from '../../constants/introConstant'
import {SearchBar} from "../../components/searchBar/searchBar";
import {Calendar} from "../../components/calendar/calendar";
import {List} from"../../components/list/list"
import {useModal} from "../../hooks/useModal";

const Intro: React.FC = () => {
	const { isOpenModal, toggleModal } = useModal();
	return (
		<S.BackGround bg={bgImage}>
			<S.AuthNavContainer>
				<Close/>
			<S.AuthMenu>
				{AUTH_MESSAGES.LOGIN}
					<Divider/>
				{AUTH_MESSAGES.REGISTER}
			</S.AuthMenu>
			</S.AuthNavContainer>
			<S.Title>{INTRO_MESSAGES.INTRO}</S.Title>
			<SearchBar type="location"  onToggleModal={toggleModal}  />

			{isOpenModal && (

					<S.ModalWrapper>
						<div style={{ flex: 1, visibility: isOpenModal.location ? 'visible' : 'hidden' }}>
							<List />
						</div>
						<div style={{ flex: 1, visibility: isOpenModal.date ? 'visible' : 'hidden' }}>
							<Calendar />
						</div>
					</S.ModalWrapper>
			)}
		</S.BackGround>
	);
};

export default Intro;