# FastAPI/NextJS/Postgres + Prisma Turborepo

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin: 2rem 0; padding: 1rem; background: #f8f9fa; border-radius: 0.5rem;">
  <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" style="height: 40px; object-fit: contain;"/>
  <img src="https://assets.vercel.com/image/upload/v1662134459/nextjs/Icon_light_background.png" alt="Next.js" style="height: 40px; object-fit: contain;"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" style="height: 40px; object-fit: contain;"/>
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Actions" style="height: 40px; object-fit: contain;"/>
  <img src="https://jestjs.io/img/jest.png" alt="Jest" style="height: 40px; object-fit: contain;"/>
  <img src="https://www.python.org/static/community_logos/python-logo-generic.svg" alt="Python" style="height: 40px; object-fit: contain;"/>
  <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" style="height: 40px; object-fit: contain;"/>
  <img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="Prisma" style="height: 40px; object-fit: contain;"/>
  <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" style="height: 40px; object-fit: contain;"/>
  <img src="https://turbo.build/images/favicon-dark/apple-touch-icon.png" alt="Turborepo" style="height: 40px; object-fit: contain;"/>
  <img src="https://redis.com/wp-content/themes/wpx/assets/images/logo-redis.svg" alt="Redis" style="height: 40px; object-fit: contain;"/>
</div>

**Tech Stack:** FastAPI • Next.js • TypeScript • Python • PostgreSQL • Prisma • Docker • Turborepo

<div style="text-align:center;margin: 20px auto;">
  <img
    style="background:white;margin: 0 auto;"
    src="./extras/logo.png"
    alt="Repo logo"
    width="250"/>
</div>

This template provides a modern, full-stack SaaS application boilerplate built with FastAPI and Next.js, designed for rapid development and scalability. It combines the best practices of both Python and TypeScript ecosystems to create a robust, type-safe, and performant application.

## Key Features

- **Full-Stack Type Safety**: TypeScript for frontend and Python type hints for backend
- **Modern Authentication**: Built-in auth system with [FastAPI Auth](https://fastapi-auth.github.io/) and [Supabase Auth](https://supabase.com/auth) for seamless authentication
- **Database Management**: [Prisma](https://www.prisma.io/) ORM for type-safe database operations
- **API Documentation**: Auto-generated [OpenAPI](https://swagger.io/specification/) documentation
- **Testing Infrastructure**: Comprehensive testing with [Pytest](https://docs.pytest.org/) and [Jest](https://jestjs.io/)
- **CI/CD Pipeline**: [GitHub Actions](https://docs.github.com/en/actions) workflow for automated testing and deployment
- **Monorepo Structure**: [Turborepo](https://turbo.build/repo) for efficient workspace management
- **Caching Layer**: [Redis](https://redis.io/) integration for improved performance
- **Containerization**: [Docker](https://www.docker.com/) support for consistent development and deployment

## Use Cases

- Building scalable SaaS applications
- Creating RESTful APIs with automatic documentation
- Developing type-safe full-stack applications
- Setting up a production-ready development environment
- Implementing modern authentication and authorization
- Managing complex database operations with type safety
- Multi-tenant application with secure data isolation

## Technology Stack

### Backend

- **[FastAPI](https://fastapi.tiangolo.com/)**: High-performance web framework for building APIs with Python
- **Python 3.11+**: Latest stable Python version with enhanced type hints
- **[Pydantic](https://docs.pydantic.dev/)**: Data validation and settings management
- **[SQLModel](https://sqlmodel.tiangolo.com/)**: SQL database library for Python, with SQLAlchemy core and Pydantic
- **[FastAPI Auth](https://fastapi-auth.github.io/)**: Authentication and authorization library
- **[Loguru](https://github.com/Delgan/loguru)**: Advanced logging library with better exception handling and formatting

### Frontend

- **[Next.js 14](https://nextjs.org/)**: React framework with App Router and Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)**: Static type checking for JavaScript
- **[shadcn/ui](https://ui.shadcn.com/)**: Re-usable components built with Radix UI and Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[React Query](https://tanstack.com/query/latest)**: Data fetching and caching library
- **[Zustand](https://github.com/pmndrs/zustand)**: State management solution
- **[React Hook Form](https://react-hook-form.com/)**: Form validation and handling
- **[Zod](https://zod.dev/)**: Schema validation
- **[Winston](https://github.com/winstonjs/winston)**: Versatile logging library for Node.js

### Database & Caching

- **[PostgreSQL 15](https://www.postgresql.org/)**: Advanced open-source database (powered by [Supabase](https://supabase.com/) for managed PostgreSQL and authentication)
- **[Prisma](https://www.prisma.io/)**: Type-safe ORM for database operations with built-in connection pooling
- **[Redis 7](https://redis.io/)**: In-memory data structure store for caching

### DevOps & Infrastructure

- **[Docker](https://www.docker.com/)**: Containerization platform
- **[GitHub Actions](https://docs.github.com/en/actions)**: CI/CD automation
- **[Turborepo](https://turbo.build/repo)**: High-performance build system
- **[Nginx](https://www.nginx.com/)**: Web server and reverse proxy
- **[Prometheus](https://prometheus.io/)**: Monitoring and alerting
- **[Grafana](https://grafana.com/)**: Metrics visualization
- **[ELK Stack](https://www.elastic.co/what-is/elk-stack)**: Log aggregation and analysis (Elasticsearch, Logstash, Kibana)

### Docker Setup

The project uses Docker for containerization and development. The setup includes:

#### Development Environment

- **Docker Compose**: Orchestrates multiple services for local development
- **Hot Reload**: Automatic code reloading for both frontend and backend
- **Volume Mounting**: Persistent storage for development data
- **Environment Variables**: Secure configuration management

#### Production Environment

- **Multi-stage Builds**: Optimized container images for production
- **Security**: Non-root user execution and minimal dependencies
- **Health Checks**: Container health monitoring
- **Resource Limits**: CPU and memory constraints

#### Services

- **API Service**: FastAPI application with Gunicorn
- **Web Service**: Next.js application with Node.js
- **Database Service**: PostgreSQL with persistent storage
- **Cache Service**: Redis for session management
- **Nginx Service**: Reverse proxy and static file serving

### Email Service

- **[Mailgun](https://www.mailgun.com/)**: Transactional email service for password reset and notifications
  - SMTP and API-based email delivery
  - Email templates for consistent branding
  - Delivery tracking and analytics
  - Spam protection and domain authentication
  - Rate limiting and throttling controls

#### Email Templates

- **Password Reset**: Secure token-based password reset flow
- **Welcome Email**: New user onboarding
- **Notification Emails**: System alerts and updates
- **Marketing Emails**: Optional promotional content

#### Security Features

- DKIM and SPF authentication
- TLS encryption for email transmission
- Rate limiting to prevent abuse
- IP allowlisting for trusted senders
- Bounce and complaint handling

### Environment Management

The project uses a comprehensive environment management system to handle different deployment scenarios and configurations.

#### Environment Variables

- **Development**: `.env.development` for local development
- **Testing**: `.env.test` for CI/CD pipeline
- **Production**: `.env.production` for live deployment
- **Shared**: `.env.shared` for common variables

#### Variable Categories

- **Database**: Connection strings and credentials
- **Authentication**: JWT secrets and OAuth keys
- **External Services**: API keys and endpoints
- **Application**: Feature flags and configuration
- **Security**: Encryption keys and certificates

#### Security Best Practices

- Never commit `.env` files to version control
- Use environment-specific variable files
- Implement variable validation using Zod
- Encrypt sensitive values in production
- Rotate credentials regularly

### Vercel Deployment

The frontend application is deployed on Vercel for optimal performance and scalability.

#### Deployment Process

1. **Automatic Deployments**

   - Triggered by pushes to main branch
   - Preview deployments for pull requests
   - Branch-specific deployments

2. **Environment Configuration**

   - Vercel dashboard for environment variables
   - Production and preview environments
   - Secret management for sensitive data

3. **Build Settings**

   - Framework preset: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: 18.x

4. **Performance Optimization**

   - Edge Network distribution
   - Automatic HTTPS
   - Image optimization
   - Serverless functions

5. **Monitoring and Analytics**
   - Real-time performance metrics
   - Error tracking
   - Analytics integration
   - Deployment logs

#### Deployment Checklist

- [ ] Configure environment variables
- [ ] Set up custom domains
- [ ] Enable HTTPS
- [ ] Configure build settings
- [ ] Set up monitoring
- [ ] Test production build
- [ ] Verify API endpoints
- [ ] Check environment variables
- [ ] Validate authentication
- [ ] Test email functionality

#### GitHub Actions and CI

1. **Continuous Integration Pipeline**

   - Automated testing on pull requests
   - Branch protection rules
   - Code quality checks
   - Security scanning

2. **Backend CI Workflow**

   - Python 3.11 environment setup
   - Poetry dependency management
   - PostgreSQL 15 service container
   - Redis 7 service container
   - Pytest test execution
   - Code coverage reporting

3. **Frontend CI Workflow**

   - Node.js environment setup
   - NPM dependency installation
   - Jest test execution
   - TypeScript type checking
   - Build verification
   - Bundle analysis

4. **CI Configuration**

   ```yaml
   # Key CI Features
   - Automated testing
   - Service containers
   - Dependency caching
   - Parallel job execution
   - Artifact management
   ```

5. **Quality Gates**

   - Test coverage thresholds
   - Type checking requirements
   - Linting standards
   - Security scanning
   - Performance benchmarks

6. **CI Best Practices**

   - Fast feedback loops
   - Cached dependencies
   - Parallel test execution
   - Automated deployments
   - Environment parity
   - Security scanning
   - Code quality checks

#### CI Checklist

- [ ] Configure GitHub Actions workflows
- [ ] Set up service containers
- [ ] Configure test environments
- [ ] Set up caching
- [ ] Configure branch protection
- [ ] Set up automated testing
- [ ] Configure code coverage
- [ ] Set up security scanning
- [ ] Configure deployment automation
- [ ] Set up monitoring and alerts

## Author

This template was created by [Mac Anderson](https://macanderson.com), a full-stack developer specializing in AI/ML systems. With experience in building and scaling successful startups, Mac is dedicated to creating robust applications and sharing technical knowledge with the developer community.

### Connect & Learn More

- **Personal Blog & Portfolio**: [macanderson.com](https://macanderson.com) - Technical articles, project showcases, and development insights
- **Code Writing Founders**: [02Beta.com](https://02beta.com) - A blog dedicated to helping founders write better code and build better products

Feel free to reach out for:

- Technical consulting
- Code reviews
- Project collaboration
- Speaking engagements
- Writing opportunities

### Support the Project

If you find this template helpful, consider:

- Starring the repository
- Contributing to the codebase
- Sharing with your network
- Following for updates
