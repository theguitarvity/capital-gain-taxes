import {Segments, Joi, celebrate} from 'celebrate';

export default celebrate({
    [Segments.BODY]: Joi.array().required().min(1).items(
        Joi.object().keys({
        'operation': Joi.string().required(),
        'unit-cost': Joi.number().required(),
        'quantity': Joi.number().required(),

    }))
})