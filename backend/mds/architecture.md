# Architecture

Standart nestJS architecture

root/
  src/
    common/
      decorators/
      filters/
      guards/
      middlewares/
      providers/
      constants/
    modules/
      user/
        controllers/
        dtos/
        jobs/
        models/
        services/
        tests/
        user.module.ts
      auth/
        controllers/
        dtos/
        jobs/
        models/
        services/
        tests/
        auth.module.ts
      tasks/
        controllers/
        dtos/
        jobs/
        models/
        services/
        tests/
        tasks.module.ts
    database/
      migrations/
      seeds/
    config/
      env.config.ts
      validation.schema.ts
    test/
    app.module.ts
    main.ts
