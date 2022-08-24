import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Box, Container } from '@mui/system'
import Heading from './components/Heading'
import StudentsList from './components/StudentsList'
import StudentsForm from './components/StudentsForm'
import { StudentGlobalProvider } from './context/StudentGlobalState'

function App() {


  return (

<>
      <Container>
        <StudentGlobalProvider>
          <BrowserRouter>
            <Heading />
            <Box style={{padding: "150px 0 0 0"}}  >
              <Routes>
                <Route path="/" element={<StudentsList />} />
                <Route path="/add-student" element={<StudentsForm />} />
                <Route path="/edit-student/:id" element={<StudentsForm />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </StudentGlobalProvider>
      </Container>
</>
  )
}

export default App
