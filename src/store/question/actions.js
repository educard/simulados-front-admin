import http from 'utils/http'
import { createAction } from 'redux-actions'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR, GROWL_SUCCESS } from 'store/ui/constants'
import { API_URL } from '../../config'

const questionsLoaded = createAction('QUESTIONS_LOADED')

const saveQuestion = question => {
  return () => {
    return http.post(`${API_URL}/questions`, { data: question })
  }
}

const editQuestion = question => dispatch => {
  http.put(`${API_URL}/questions/${question.id}`, {
      data: question,
    })
    .then(() => dispatch(growl('Questão alterada com sucesso.', GROWL_SUCCESS)))
    .catch(error =>
      dispatch(
        growl(
          error.message === '400'
            ? 'Campos informados invalidos'
            : 'Erro ao atualizar questão',
          GROWL_ERROR,
        ),
      ),
    )
}

const fetchQuestions = (professorId, subArea, offset, limit) => dispatch => {
  http
    .get(`${API_URL}/professor/questions/${professorId}`)
    .then(listQuestions => dispatch(questionsLoaded(listQuestions)))
    .catch(() => dispatch(growl('Erro ao carregar questões', GROWL_ERROR)))
}

export { saveQuestion, questionsLoaded, fetchQuestions, editQuestion }
