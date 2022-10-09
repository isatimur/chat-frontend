import flow from 'lodash/flow';
import { withRouter } from './with-router';

/**
 * @hoc Инициализирующая логика приложения
 * @remark Содержит:
 * - логику инициализации роутера (withRouter)
 */
export const withHocs = flow(withRouter);
