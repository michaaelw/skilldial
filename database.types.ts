export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      coding_problem_languages: {
        Row: {
          id: string
          language: string | null
          problem_id: string | null
          solution_code: string | null
          starter_code: string | null
          test_cases: Json | null
        }
        Insert: {
          id?: string
          language?: string | null
          problem_id?: string | null
          solution_code?: string | null
          starter_code?: string | null
          test_cases?: Json | null
        }
        Update: {
          id?: string
          language?: string | null
          problem_id?: string | null
          solution_code?: string | null
          starter_code?: string | null
          test_cases?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "coding_problem_languages_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["problem_id"]
          },
        ]
      }
      coding_problem_test_cases: {
        Row: {
          expected_output: Json | null
          explanation: string | null
          id: string
          input: Json | null
          is_example: boolean | null
          is_hidden: boolean | null
          language: string | null
          problem_id: string
          sequence_order: number | null
        }
        Insert: {
          expected_output?: Json | null
          explanation?: string | null
          id?: string
          input?: Json | null
          is_example?: boolean | null
          is_hidden?: boolean | null
          language?: string | null
          problem_id: string
          sequence_order?: number | null
        }
        Update: {
          expected_output?: Json | null
          explanation?: string | null
          id?: string
          input?: Json | null
          is_example?: boolean | null
          is_hidden?: boolean | null
          language?: string | null
          problem_id?: string
          sequence_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coding_problem_test_cases_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["problem_id"]
          },
        ]
      }
      coding_problems: {
        Row: {
          default_language: string | null
          problem_id: string
        }
        Insert: {
          default_language?: string | null
          problem_id: string
        }
        Update: {
          default_language?: string | null
          problem_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coding_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      deck_closure: {
        Row: {
          ancestor_id: string
          depth: number
          descendant_id: string
          id: string
        }
        Insert: {
          ancestor_id: string
          depth: number
          descendant_id: string
          id?: string
        }
        Update: {
          ancestor_id?: string
          depth?: number
          descendant_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deck_closure_ancestor_id_fkey"
            columns: ["ancestor_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deck_closure_descendant_id_fkey"
            columns: ["descendant_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
        ]
      }
      decks: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      diagram_labeling_problems: {
        Row: {
          image_url: string | null
          labels: Json | null
          problem_id: string
        }
        Insert: {
          image_url?: string | null
          labels?: Json | null
          problem_id: string
        }
        Update: {
          image_url?: string | null
          labels?: Json | null
          problem_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diagram_labeling_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      difficulties: {
        Row: {
          id: string
          label: string
          penalty_score: number | null
        }
        Insert: {
          id?: string
          label: string
          penalty_score?: number | null
        }
        Update: {
          id?: string
          label?: string
          penalty_score?: number | null
        }
        Relationships: []
      }
      fill_in_blank_problems: {
        Row: {
          correct_answer: string | null
          problem_id: string
        }
        Insert: {
          correct_answer?: string | null
          problem_id: string
        }
        Update: {
          correct_answer?: string | null
          problem_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fill_in_blank_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      matching_problems: {
        Row: {
          correct_pairs: Json | null
          left_items: Json | null
          problem_id: string
          right_items: Json | null
        }
        Insert: {
          correct_pairs?: Json | null
          left_items?: Json | null
          problem_id: string
          right_items?: Json | null
        }
        Update: {
          correct_pairs?: Json | null
          left_items?: Json | null
          problem_id?: string
          right_items?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "matching_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      multiple_choice_options: {
        Row: {
          explanation: string | null
          id: string
          is_correct: boolean | null
          problem_id: string | null
          text: string | null
        }
        Insert: {
          explanation?: string | null
          id?: string
          is_correct?: boolean | null
          problem_id?: string | null
          text?: string | null
        }
        Update: {
          explanation?: string | null
          id?: string
          is_correct?: boolean | null
          problem_id?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "multiple_choice_options_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "multiple_choice_problems"
            referencedColumns: ["problem_id"]
          },
        ]
      }
      multiple_choice_problems: {
        Row: {
          is_multi_answer: boolean | null
          problem_id: string
        }
        Insert: {
          is_multi_answer?: boolean | null
          problem_id: string
        }
        Update: {
          is_multi_answer?: boolean | null
          problem_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "multiple_choice_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      ordering_problems: {
        Row: {
          problem_id: string
          steps: Json | null
        }
        Insert: {
          problem_id: string
          steps?: Json | null
        }
        Update: {
          problem_id?: string
          steps?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ordering_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      problem_attempts: {
        Row: {
          id: string
          problem_id: string | null
          score: number | null
          submitted_answer: string | null
          submitted_at: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          problem_id?: string | null
          score?: number | null
          submitted_answer?: string | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          problem_id?: string | null
          score?: number | null
          submitted_answer?: string | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problem_attempts_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      problem_review_status: {
        Row: {
          fluent_since: string | null
          id: string
          last_reviewed_at: string | null
          problem_id: string | null
          review_score: number | null
          state: string | null
          user_id: string | null
        }
        Insert: {
          fluent_since?: string | null
          id?: string
          last_reviewed_at?: string | null
          problem_id?: string | null
          review_score?: number | null
          state?: string | null
          user_id?: string | null
        }
        Update: {
          fluent_since?: string | null
          id?: string
          last_reviewed_at?: string | null
          problem_id?: string | null
          review_score?: number | null
          state?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problem_review_status_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      problem_tags: {
        Row: {
          id: string
          problem_id: string | null
          tag_id: string | null
        }
        Insert: {
          id?: string
          problem_id?: string | null
          tag_id?: string | null
        }
        Update: {
          id?: string
          problem_id?: string | null
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problem_tags_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "problem_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      problem_types: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      problems: {
        Row: {
          created_at: string | null
          difficulty_id: string | null
          id: string
          interview_weight: number | null
          is_foundational: boolean | null
          problem_type_id: string | null
          prompt: string | null
          subject_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          difficulty_id?: string | null
          id?: string
          interview_weight?: number | null
          is_foundational?: boolean | null
          problem_type_id?: string | null
          prompt?: string | null
          subject_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          difficulty_id?: string | null
          id?: string
          interview_weight?: number | null
          is_foundational?: boolean | null
          problem_type_id?: string | null
          prompt?: string | null
          subject_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problems_difficulty_id_fkey"
            columns: ["difficulty_id"]
            isOneToOne: false
            referencedRelation: "difficulties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "problems_problem_type_id_fkey"
            columns: ["problem_type_id"]
            isOneToOne: false
            referencedRelation: "problem_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "problems_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          username: string | null
        }
        Insert: {
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          username?: string | null
        }
        Update: {
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          username?: string | null
        }
        Relationships: []
      }
      study_plan_decks: {
        Row: {
          deck_id: string
          id: string
          phase: string | null
          sequence_order: number | null
          study_plan_id: string
        }
        Insert: {
          deck_id: string
          id?: string
          phase?: string | null
          sequence_order?: number | null
          study_plan_id: string
        }
        Update: {
          deck_id?: string
          id?: string
          phase?: string | null
          sequence_order?: number | null
          study_plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_plan_decks_deck_id_fkey"
            columns: ["deck_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_plan_decks_study_plan_id_fkey"
            columns: ["study_plan_id"]
            isOneToOne: false
            referencedRelation: "study_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      study_plan_problems: {
        Row: {
          id: string
          phase: string | null
          problem_id: string
          sequence_order: number | null
          study_plan_id: string
        }
        Insert: {
          id?: string
          phase?: string | null
          problem_id: string
          sequence_order?: number | null
          study_plan_id: string
        }
        Update: {
          id?: string
          phase?: string | null
          problem_id?: string
          sequence_order?: number | null
          study_plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_plan_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_plan_problems_study_plan_id_fkey"
            columns: ["study_plan_id"]
            isOneToOne: false
            referencedRelation: "study_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      study_plans: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          duration_days: number | null
          id: string
          is_public: boolean | null
          name: string
          plan_origin: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_days?: number | null
          id?: string
          is_public?: boolean | null
          name: string
          plan_origin?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_days?: number | null
          id?: string
          is_public?: boolean | null
          name?: string
          plan_origin?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_plans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subject_dependencies: {
        Row: {
          ancestor_id: string | null
          depth: number | null
          descendant_id: string | null
          id: string
        }
        Insert: {
          ancestor_id?: string | null
          depth?: number | null
          descendant_id?: string | null
          id?: string
        }
        Update: {
          ancestor_id?: string | null
          depth?: number | null
          descendant_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subject_dependencies_ancestor_id_fkey"
            columns: ["ancestor_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subject_dependencies_descendant_id_fkey"
            columns: ["descendant_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          id: string
          label: string
        }
        Insert: {
          id?: string
          label: string
        }
        Update: {
          id?: string
          label?: string
        }
        Relationships: []
      }
      true_false_problems: {
        Row: {
          correct_answer: boolean | null
          explanation: string | null
          problem_id: string
        }
        Insert: {
          correct_answer?: boolean | null
          explanation?: string | null
          problem_id: string
        }
        Update: {
          correct_answer?: boolean | null
          explanation?: string | null
          problem_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "true_false_problems_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      user_study_plans: {
        Row: {
          completed_at: string | null
          current_day: number | null
          id: string
          progress_percent: number | null
          started_at: string | null
          study_plan_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          current_day?: number | null
          id?: string
          progress_percent?: number | null
          started_at?: string | null
          study_plan_id: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          current_day?: number | null
          id?: string
          progress_percent?: number | null
          started_at?: string | null
          study_plan_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_study_plans_study_plan_id_fkey"
            columns: ["study_plan_id"]
            isOneToOne: false
            referencedRelation: "study_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_study_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
