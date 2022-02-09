import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { SyntheticEvent, useState } from "react";
import { ALL_PAGES } from "../data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Card } from "@mui/material";
import PageList, { IPage } from "./PageList";

function categorizePages(pages: IPage[]): Map<string, IPage[]> {
  const categoryPagesMap = new Map<string, IPage[]>();
  categoryPagesMap.set(ALL_PAGES, pages);
  pages.forEach((page: IPage) => {
    if (!categoryPagesMap.get(page.category)) {
      categoryPagesMap.set(page.category, []);
    }
    categoryPagesMap.get(page.category)?.push(page);
  });
  return categoryPagesMap;
}

type NavigationSectionProps = {
  pages: IPage[];
};

export const NavigationSection = ({ pages }: NavigationSectionProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    ALL_PAGES
  );

  const handleChange =
    (curSectionName: string) =>
    (event: SyntheticEvent, isExpanded: boolean) => {
      setExpandedSection(isExpanded ? curSectionName : null);
    };

  const categoryPagesMap: Map<string, IPage[]> = categorizePages(pages);

  return (
    <>
      <Box sx={{ bgcolor: grey[100], p: 2 }}>
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Typography
            variant="h4"
            sx={{ m: 4, textAlign: "center", fontWeight: "bold" }}
            gutterBottom
          >
            Start putting your ideas into action with Azure products and
            services
          </Typography>
          {Array.from(categoryPagesMap.entries()).map(
            ([curSectionName, pages]: [string, IPage[]]) => (
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                key={curSectionName}
                expanded={curSectionName === expandedSection}
                onChange={handleChange(curSectionName)}
              >
                <Card
                  sx={{
                    m: 1,
                    boxShadow: 3,
                  }}
                >
                  <AccordionSummary
                    sx={{ m: 1 }}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography variant="h6">{curSectionName}</Typography>
                  </AccordionSummary>
                </Card>
                <AccordionDetails>
                  <PageList pages={pages} />
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
      </Box>
    </>
  );
};
