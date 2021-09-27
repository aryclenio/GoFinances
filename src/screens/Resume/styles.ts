import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(133)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 24px;
`

export const MonthSelectButton = styled(BorderlessButton)``

export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`