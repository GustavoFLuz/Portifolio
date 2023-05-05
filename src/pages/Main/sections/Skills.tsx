import { Box, Container, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { SkillsType } from '../../../shared/types'
import { skills } from '../../../shared/constants'
import { CustomModal, SkillCard } from '../../../shared/components'
export const Skills = () => {
    const theme = useTheme();
    const [selectedSkill, setSelectedSkill] = useState<SkillsType | null>(null);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                Skills
            </Typography>
            {selectedSkill &&
                <CustomModal
                    title={selectedSkill.name}
                    link={selectedSkill.url}
                    icon={selectedSkill.image}
                    description={selectedSkill.info.en}
                    hideFunction={() => setSelectedSkill(null)}
                    backgroundColor={selectedSkill.color}
                />
            }
            <Box sx={{ width: "100%", display: 'flex', flexWrap: "wrap", justifyContent: "center", }}>
                {skills.map((element: SkillsType) => (
                    element.shownOnStart &&
                    <SkillCard key={element.name} skill={element} textColor={theme.palette.text.primary} setSkill={setSelectedSkill} />
                ))}
            </Box>
        </Container>
    )
}
