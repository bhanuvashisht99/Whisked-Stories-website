export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          excerpt: string
          featured_image: string | null
          id: string
          is_published: boolean | null
          reading_time: number | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          excerpt: string
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          reading_time?: number | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          reading_time?: number | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      custom_order_inquiries: {
        Row: {
          additional_notes: string | null
          budget_range: string | null
          cake_description: string
          created_at: string
          email: string
          event_date: string
          event_type: string
          guest_count: number
          id: string
          name: string
          phone: string
          status: string | null
          updated_at: string
        }
        Insert: {
          additional_notes?: string | null
          budget_range?: string | null
          cake_description: string
          created_at?: string
          email: string
          event_date: string
          event_type: string
          guest_count: number
          id?: string
          name: string
          phone: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          additional_notes?: string | null
          budget_range?: string | null
          cake_description?: string
          created_at?: string
          email?: string
          event_date?: string
          event_type?: string
          guest_count?: number
          id?: string
          name?: string
          phone?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string
          current_attendees: number | null
          description: string
          event_date: string
          event_time: string | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_featured: boolean | null
          location: string | null
          max_attendees: number | null
          price: number | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_attendees?: number | null
          description: string
          event_date: string
          event_time?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location?: string | null
          max_attendees?: number | null
          price?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_attendees?: number | null
          description?: string
          event_date?: string
          event_time?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location?: string | null
          max_attendees?: number | null
          price?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          status: string | null
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          status?: string | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          status?: string | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_email: string
          customer_name: string
          customer_phone: string | null
          delivery_date: string | null
          id: string
          notes: string | null
          order_date: string
          status: string | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_email: string
          customer_name: string
          customer_phone?: string | null
          delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date: string
          status?: string | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_email?: string
          customer_name?: string
          customer_phone?: string | null
          delivery_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          status?: string | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          allergens: string[] | null
          category: string
          created_at: string
          description: string
          id: string
          images: string[] | null
          ingredients: string[] | null
          is_archived: boolean | null
          is_available: boolean | null
          name: string
          nutritional_info: Json | null
          price: number
          season: string
          serving_size: string
          updated_at: string
        }
        Insert: {
          allergens?: string[] | null
          category: string
          created_at?: string
          description: string
          id?: string
          images?: string[] | null
          ingredients?: string[] | null
          is_archived?: boolean | null
          is_available?: boolean | null
          name: string
          nutritional_info?: Json | null
          price: number
          season?: string
          serving_size: string
          updated_at?: string
        }
        Update: {
          allergens?: string[] | null
          category?: string
          created_at?: string
          description?: string
          id?: string
          images?: string[] | null
          ingredients?: string[] | null
          is_archived?: boolean | null
          is_available?: boolean | null
          name?: string
          nutritional_info?: Json | null
          price?: number
          season?: string
          serving_size?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          customer_image: string | null
          customer_name: string
          id: string
          is_approved: boolean | null
          is_featured: boolean | null
          product_id: string | null
          rating: number | null
          review: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_image?: string | null
          customer_name: string
          id?: string
          is_approved?: boolean | null
          is_featured?: boolean | null
          product_id?: string | null
          rating?: number | null
          review: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_image?: string | null
          customer_name?: string
          id?: string
          is_approved?: boolean | null
          is_featured?: boolean | null
          product_id?: string | null
          rating?: number | null
          review?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "testimonials_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
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