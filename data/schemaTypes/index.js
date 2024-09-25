import { createSchema } from "sanity"
import review from "./review"
import services from "./services"
import brands from "./brands"
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import works from './works'
import team from './team'
import mentees from "./mentees"


export const schemaTypes = [review, services, brands, experiences, skills, workExperience, contact, works, team, mentees]; 
