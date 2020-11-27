import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { HomeIcon, HomeActiveIcon, ProfileIcon, ProfileActiveIcon, TransferIcon, TransferActiveIcon } from 'mini/assets'
import { ACTIVE_COLOR, INACTIVE_COLOR } from 'mini/utils/constant.js'

const TabItems = ({ isFocused, onPress, onLongPress, label }) => {

    const Icon = () => {
        if (label === "Home") return isFocused ? <HomeActiveIcon/> : <HomeIcon/>

        if (label === "Transfer") return isFocused ? <TransferActiveIcon/> : <TransferIcon/>

        if (label === "Profile") return isFocused ? <ProfileActiveIcon/> : <ProfileIcon/>

        return <HomeIcon/>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    text: (isFocused) => ({
        fontSize: 0,
        color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR
    })
})
