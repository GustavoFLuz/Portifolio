import React, { useState } from 'react'
import { SkillsType } from '../types'
import { Box, Typography } from '@mui/material'
import SVG from 'react-inlinesvg'

type PropsTypes = {
    skill: SkillsType;
    textColor: string;
    setSkill: React.Dispatch<React.SetStateAction<SkillsType | null>>;
}

export const SkillCard: React.FC<PropsTypes> = ({ skill, textColor, setSkill }) => {
    const [isHovered, setIsHovered] = useState(false);

    const eventHandlers = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onClick: () => setSkill(skill)
    }

    return (
        <Box key={skill.name} sx={{ flexGrow: 1, minWidth: "20%", p: 2 }}>
            <div style={{ cursor: "pointer", display: 'flex', flexDirection: "column", alignItems: "center", width: "fit-content", margin: "auto" }} {...eventHandlers}>
                <SVG src={skill.image} style={{ width: "60px", display: "inline", scale: isHovered ? "1.2" : "1", marginBottom: "5px" }}
                    fill={isHovered ? skill.color : textColor} ></SVG>
                <Typography variant="h6" sx={{ color: isHovered ? skill.color : textColor }}>
                    {skill.name}
                </Typography>
            </div>
        </Box >
    )
}
