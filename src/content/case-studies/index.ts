import type { CaseStudy } from "../types";
import { casenotes } from "./casenotes";
import { goaler } from "./goaler";
import { medchron } from "./medchron";
import { referralProgram } from "./referral-program";

export const caseStudies: CaseStudy[] = [casenotes, medchron, referralProgram, goaler];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
